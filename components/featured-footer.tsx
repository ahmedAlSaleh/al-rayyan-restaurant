import { siteContent } from "@/data/site-content";

export default function FeaturedFooter() {
  return (
    <footer className="relative overflow-clip border-t border-[#f39e47]/20 bg-[linear-gradient(180deg,#120502_0%,#0f0402_100%)] px-6 py-14 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(255,138,34,0.15)] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-40 w-40 rounded-full bg-[rgba(204,42,31,0.15)] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-[#fff1dc]">{siteContent.brand.name}</h3>
          <p className="text-sm leading-7 text-[#ffd6ab]">{siteContent.footer.about}</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-[#ffb45d]">التواصل</h4>
          <a
            href={siteContent.contact.phoneHref}
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-[#ffe6c5] hover:text-[#ffbe72]"
          >
            {siteContent.contact.phoneDisplay}
          </a>
          <a
            href={siteContent.contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-[#ffe6c5] hover:text-[#ffbe72]"
          >
            {siteContent.contact.whatsappDisplay}
          </a>
          <p className="text-sm leading-7 text-[#ffe6c5]">{siteContent.contact.address}</p>
          <a
            href={siteContent.contact.locationHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-semibold text-[#ffbe72] hover:text-[#ffd7a0]"
          >
            {siteContent.contact.locationText}
          </a>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-[#ffb45d]">أوقات العمل</h4>
          {siteContent.contact.openingHours.map((hour) => (
            <p key={hour} className="text-sm leading-7 text-[#ffe6c5]">
              {hour}
            </p>
          ))}
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-[#ffb45d]">روابط سريعة</h4>
          <div className="grid grid-cols-1 gap-2">
            {siteContent.footer.quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-[#ffe6c5] hover:text-[#ffbe72]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-7xl border-t border-[#f39e47]/16 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-[#e7be96]">{siteContent.footer.copyright}</p>
          <a
            href={siteContent.footer.builtByUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-semibold text-[#ffbe72] hover:text-[#ffd8a4]"
          >
            {siteContent.footer.builtByLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
