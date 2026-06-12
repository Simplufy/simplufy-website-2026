# GHL setup: Simplufy intro call + website form

Created/updated by Hermes on 2026-06-11.

## Completed via LeadConnector API

### New calendar

- Name: Simplufy Intro Call
- Calendar ID: `gu9pNbbTiPcWRzbYZyjR`
- Booking widget URL: `https://api.leadconnectorhq.com/widget/booking/gu9pNbbTiPcWRzbYZyjR`
- Widget slug: `simplufy-intro-call`
- Location ID: `rVBMfeAL3JRtkXSZ3wS4`
- Calendar group: `oEzXXwKzDjJSHrlEBCF5` (`Simplufy Introduction Call`)
- Duration: 30 minutes
- Slot interval: 15 minutes
- Hours copied from prior website calendar: Monday-Friday, 9:00am-5:00pm
- Booking availability: allow after 24 hours, allow 2 weeks out
- Auto-confirm: true
- Google invite emails: true
- Reschedule/cancel: enabled

### Website embed updated

File:

`src/components/ContactForm.astro`

Old booking calendar:

`hkNEVMfmHfPISzWE536J`

New booking calendar:

`gu9pNbbTiPcWRzbYZyjR`

## Blocked by GHL API / must finish in GHL UI

The LeadConnector API token can list forms and workflows, but GHL rejected direct form creation and workflow creation/detail routes:

- `POST /forms/` returned `401: This route is not yet supported by the IAM Service. Please update your IAM config.`
- `GET /forms/{id}` returned the same IAM route error.
- `POST /workflows/` returned `404: Cannot POST /workflows/`.
- `GET /workflows/{id}` returned `404: Cannot GET /workflows/{id}`.

So the calendar was created and the website booking embed was updated, but the new form and the automation sequences must be created in the GHL UI unless/until GHL exposes these routes for this account/token.

## New form to create in GHL UI

Create a new form:

- Name: `Simplufy Website Audit Request`
- Suggested internal description: `Primary Simplufy website form for free audit and inbound lead requests.`
- Connect to website after creation by replacing the existing form ID in `src/components/ContactForm.astro`.

Current website form ID still in use:

`e38LR5S7tD7YqKhI9po7` (`INBOUND WEBSITE FORM`)

Recommended fields:

1. First Name
2. Last Name
3. Email
4. Phone
5. Business Name
6. Website URL
7. What do you want help with?
   - Website / landing page
   - SEO / local SEO
   - Ads / paid media
   - CRM / automations
   - Missed calls / follow-up
   - AI implementation
   - Not sure yet
8. What is your biggest growth bottleneck right now?
9. Monthly marketing budget range
   - Under $1,000
   - $1,000-$2,500
   - $2,500-$5,000
   - $5,000-$10,000
   - $10,000+
10. How soon do you want to improve this?
    - ASAP
    - This month
    - This quarter
    - Just researching
11. Consent checkbox:
    `I agree to receive calls, texts, and emails from Simplufy about my inquiry. Message/data rates may apply. Reply STOP to opt out.`

Recommended thank-you message:

`Thanks — we received your request. We’ll review your website and follow up with the clearest next step. If you booked a call too, check your email/texts for confirmation and reminders.`

## Workflow 1: Simplufy Intro Call Booking Follow-up

Name:

`Simplufy Intro Call - Confirmation and Reminders`

Trigger:

- Appointment booked
- Calendar is `Simplufy Intro Call` / calendar ID `gu9pNbbTiPcWRzbYZyjR`

Immediate email to contact:

Subject:

`Your Simplufy intro call is booked`

Body:

`Hey {{contact.first_name}},

You're booked for a Simplufy intro call.

On the call, we'll quickly learn about your business, where leads/follow-up may be leaking, and what the clearest next step should be.

Please come prepared with your website URL, current marketing priorities, and any questions you want answered.

Need to make a change?
Reschedule: {{appointment.reschedule_link}}
Cancel: {{appointment.cancellation_link}}

Talk soon,
Simplufy`

Immediate SMS to contact:

`Hey {{contact.first_name}}, your Simplufy intro call is booked. Check your email for details. If you need to reschedule, use the link in the calendar invite. Reply STOP to opt out.`

Reminder timing:

- 24 hours before appointment: email + SMS
- 2 hours before appointment: SMS
- 15 minutes before appointment: SMS

24-hour reminder SMS:

`Reminder: your Simplufy intro call is tomorrow at {{appointment.start_time}}. Bring your website URL and any questions you want answered. Reply STOP to opt out.`

2-hour reminder SMS:

`Your Simplufy intro call is in about 2 hours. Looking forward to learning about your business and showing you the clearest next step. Reply STOP to opt out.`

15-minute reminder SMS:

`Your Simplufy intro call starts in 15 minutes. See you soon.`

Internal notification action:

Send internal email/SMS/notification to McGuire:

`New Simplufy intro call booked:
Name: {{contact.name}}
Email: {{contact.email}}
Phone: {{contact.phone}}
Business: {{contact.business_name}}
Website: {{contact.website}}
Appointment: {{appointment.start_time}}
Calendar: Simplufy Intro Call`

Stop conditions:

- Appointment canceled
- Contact replies with opt-out
- Contact is marked DND

## Workflow 2: Simplufy Website Form Follow-up

Name:

`Simplufy Website Form - Immediate Response and Internal Alert`

Trigger:

- Form submitted
- Form is `Simplufy Website Audit Request`

Immediate email to contact:

Subject:

`We received your Simplufy audit request`

Body:

`Hey {{contact.first_name}},

Thanks for reaching out to Simplufy.

We received your request and will review the details you shared. We usually look for missed lead opportunities, website conversion issues, SEO/local search gaps, and follow-up leaks.

If you want to move faster, you can also book an intro call here:
https://api.leadconnectorhq.com/widget/booking/gu9pNbbTiPcWRzbYZyjR

Talk soon,
Simplufy`

Immediate SMS to contact:

`Hey {{contact.first_name}}, this is Simplufy. We received your audit request and will review it shortly. If you want to book a call now, use this link: https://api.leadconnectorhq.com/widget/booking/gu9pNbbTiPcWRzbYZyjR Reply STOP to opt out.`

Internal alert to McGuire:

`New Simplufy website form submission:
Name: {{contact.name}}
Email: {{contact.email}}
Phone: {{contact.phone}}
Business: {{contact.business_name}}
Website: {{contact.website}}
Need: {{custom_values.what_do_you_want_help_with}}
Bottleneck: {{custom_values.biggest_growth_bottleneck}}
Timeline: {{custom_values.timeline}}
Budget: {{custom_values.marketing_budget_range}}

Next action: review and reply/book the lead.`

Optional follow-up sequence if no appointment booked/no reply:

- Wait 1 day: SMS reminder with booking link
- Wait 3 days: email with simple CTA
- Wait 7 days: final check-in

1-day SMS:

`Hey {{contact.first_name}}, quick follow-up from Simplufy. If improving your website/leads/follow-up is still a priority, you can grab an intro call here: https://api.leadconnectorhq.com/widget/booking/gu9pNbbTiPcWRzbYZyjR Reply STOP to opt out.`

3-day email subject:

`Should we take a look?`

3-day email body:

`Hey {{contact.first_name}},

Just checking in. If you still want help finding the biggest growth bottleneck in your website, SEO, ads, or follow-up process, book an intro call here:

https://api.leadconnectorhq.com/widget/booking/gu9pNbbTiPcWRzbYZyjR

If now is not the right time, no worries.

Simplufy`

7-day SMS:

`Last quick follow-up from Simplufy — want us to take a look at your growth bottleneck? If yes, book here: https://api.leadconnectorhq.com/widget/booking/gu9pNbbTiPcWRzbYZyjR Reply STOP to opt out.`

Stop conditions:

- Contact books `Simplufy Intro Call`
- Contact replies
- Contact marked DND
- Opportunity marked not interested / closed lost

## Website form replacement instructions once new GHL form exists

In `src/components/ContactForm.astro`, replace every instance of the current form ID:

`e38LR5S7tD7YqKhI9po7`

with the new GHL form ID, and update:

- `data-form-name`
- `title`

Then run:

```bash
npm run build
```

and deploy through the existing Cloudflare Pages workflow.
