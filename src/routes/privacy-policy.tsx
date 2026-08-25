import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy & Terms of Use — TradeForge" },
      {
        name: "description",
        content:
          "Terms and conditions of use for the TradeForge website, including privacy and security disclosures, intellectual property rights, and risk disclosures.",
      },
      { property: "og:title", content: "Privacy Policy & Terms of Use — TradeForge" },
      {
        property: "og:description",
        content:
          "Terms and conditions of use for the TradeForge website, including privacy and security disclosures and risk disclosures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        Updated on 6 Nov, 2025
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Terms of Use
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">Terms and conditions of use</p>

      <Section title="Overview">
        <p>
          Your use, including any sub-domains thereof, affiliated websites, and mobile
          applications (collectively, the &quot;Website&quot;), which are owned and
          maintained by TradeForge are governed by the policies, terms, and conditions
          set forth below. Please read these terms carefully. We offer the Website,
          including all information, tools, interactive materials, and services
          available from the Website to you, the user, conditioned upon your
          acceptance of all terms, conditions, policies, and notices stated here.
        </p>
        <p>
          By accessing, using, or making a transaction over the Website, you agree to
          the terms set forth herein. If you do not agree to these terms and
          conditions in their entirety, you are not authorized to use the Website in
          any manner or form whatsoever. We reserve the right to update, change, or
          replace any part of these Terms by posting updates and/or changes to our
          Website. It is your responsibility to check this page periodically for
          changes.
        </p>
      </Section>

      <Section title="Table of content">
        <ul className="list-disc space-y-1.5 pl-6">
          <li>Website Use</li>
          <li>Privacy and Security Disclosure</li>
          <li>General Conditions and Website User Conduct Restrictions</li>
          <li>Investing &amp; Education Disclosures</li>
          <li>Modifications to the Website</li>
          <li>Account Registration</li>
          <li>User Communications</li>
          <li>Social Media</li>
          <li>Digital Millennium Copyright Notice</li>
          <li>Disclaimer of Warranties</li>
        </ul>
      </Section>

      <Section title="Terms of use and conditions of sale">
        <p>
          TradeForge provides general educational content and information about prop
          firm trading strategies. It is not a broker-dealer, investment advisor, or
          affiliated with any accredited educational institutions. The Website content
          is for informational purposes only and may not be current. TradeForge does
          not guarantee success in trading, whether through demo accounts or
          otherwise, through its programs.
        </p>
        <p>
          The Website and its content do not offer personalized investment, tax,
          legal, or insurance advice and should not be considered as recommendations
          for any securities or commodity interests. Users are responsible for their
          own investment decisions and should consult with qualified professionals
          regarding their financial situations. All investments carry risks, including
          the potential loss of principal, and past performance does not guarantee
          future results.
        </p>
        <p className="font-semibold uppercase text-foreground">
          You acknowledge that trading involves high risks that may result in your
          loss of large sums of money.
        </p>
        <p>
          By using any TradeForge services, and accessing the services, you expressly
          consent to receive electronically all communications, agreements, documents,
          notices and disclosures (&quot;Notices&quot;) that we provide in connection
          with your account and your use of the services. Notices may, without
          limitation, take the form of electronic mail, in-app messages, and
          in-Website communications. Additionally, Notices may take the form of
          electronic mail containing promotional, marketing, and advertising
          information and recommendations that we believe may be of interest to you.
          If you do not wish to receive such promotional emails, you may unsubscribe
          at any time by following the instructions within, and TradeForge will honor
          any requests to unsubscribe within 30 days.
        </p>
        <p>
          TradeForge may, at its discretion, use SMS services to deliver Notices to
          end users and clients. The information received is requested by the end user
          or is based on an existing business relationship or transaction with
          TradeForge. The information sent does not contain advertising or a
          solicitation. Message frequency varies. Message and data rates may apply.
          Users can text HELP to the sending number for help and reply STOP to cancel
          receiving text messages. Carriers are not liable for delayed or undelivered
          messages.
        </p>
      </Section>

      <Section title="Intellectual Property Rights, License">
        <p>
          The audio and video materials, images, photographs, articles, opinions, and
          other text, graphics, illustrations, logos, depictions, layouts,
          compilations, designs, interfaces, digital downloads, software, data
          compilations and other content associated with the Website (the
          &quot;Content&quot;) are owned or licensed by and to TradeForge or other
          authorized third parties and are protected by intellectual property,
          copyright, trademark, trade dress and other laws in the U.S. and in other
          countries.
        </p>
        <p>
          You must comply with all such laws and applicable copyright, trademark or
          other legal notices or restrictions. You shall not remove or alter any
          copyright, trademark, or other legal notices marked on the Content. As
          between you and TradeForge, we will retain all right, title, and interest in
          and to the Website and the Content. No transfer of ownership to any portion
          of the Content shall be made as a result of any access you are granted.
          Except as expressly set forth in these Terms or expressly granted to you in
          writing by TradeForge, no rights are granted to you. You agree to abide by
          any and all additional copyright notices, information or restrictions
          contained in any part of the Website.
        </p>
        <p>
          The compilation of the Content on the Website is the exclusive property of
          TradeForge.
        </p>
      </Section>

      <Section title="Copyright">
        <p>
          The copyright in all materials provided on the Website is owned by
          TradeForge or its affiliate(s). Except as stated herein, none of the
          material contained in the Website may be copied, reproduced, distributed,
          republished, downloaded, displayed, posted or transmitted in any form or by
          any means, including, but not limited to, electronic, mechanical,
          photocopying, recording or otherwise, without the prior written consent of
          TradeForge. Permission is hereby granted to view, copy, print and download
          the materials on the Website for personal, noncommercial use only, provided
          such materials are used solely for informational purposes, and all copies,
          or portions thereof, include this copyright notice. TradeForge may revoke
          any of the foregoing rights at any time.
        </p>
        <p>
          You may not, without TradeForge&apos;s prior written consent,
          &quot;mirror&quot; any material contained on the Website on any other
          server. Upon termination of any rights extended hereunder, you must
          immediately destroy any downloaded and printed materials obtained from any
          Website. Any unauthorized use of any material contained on the Website may
          violate copyright laws, trademark laws, the laws of privacy and publicity,
          and communications regulations and statutes.
        </p>
      </Section>

      <Section title="Trademarks">
        <p>
          The trademarks, service marks and logos (&quot;Trademarks&quot;) used and
          displayed on the Website are registered or unregistered Trademarks of
          TradeForge. Nothing on the Website shall be construed as granting, by
          implication, estoppel or otherwise any license or right to use any Trademark
          displayed on the Website without the prior written consent of the Trademark
          owner.
        </p>
        <p>
          The name of TradeForge, or any Trademark may not be used in any way
          including in any advertising or publicity pertaining to distribution of
          materials on the Website without the prior written consent of TradeForge.
          TradeForge prohibits the use of any TradeForge logo and Trademark as a
          &quot;hot&quot; link to any web site unless establishment of such link is
          approved in advance by TradeForge in writing.
        </p>
      </Section>
    </div>
  );
}
