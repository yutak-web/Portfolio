import { contactLinks, profile, type ContactLink } from "../data/portfolio";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.75 6.75h16.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 8.25 7.02 5.265a.8.8 0 0 0 .96 0L19.5 8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.75a9.25 9.25 0 0 0-2.925 18.025c.462.086.63-.197.63-.44v-1.543c-2.565.558-3.105-1.084-3.105-1.084-.42-1.066-1.025-1.35-1.025-1.35-.838-.573.064-.562.064-.562.926.065 1.414.95 1.414.95.824 1.413 2.163 1.005 2.69.77.084-.6.323-1.005.588-1.236-2.048-.232-4.2-1.024-4.2-4.558 0-1.007.36-1.83.95-2.475-.095-.233-.412-1.17.09-2.44 0 0 .775-.248 2.54.946A8.83 8.83 0 0 1 12 7.22c.79.004 1.585.107 2.33.314 1.765-1.194 2.538-.946 2.538-.946.504 1.27.187 2.207.092 2.44.592.645.95 1.468.95 2.475 0 3.542-2.156 4.323-4.21 4.55.332.285.628.846.628 1.705v2.577c0 .245.165.53.638.439A9.25 9.25 0 0 0 12 2.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.4 8.1a1.35 1.35 0 1 1 0-2.7 1.35 1.35 0 0 1 0 2.7Zm-1.2 2h2.4v8.2H5.2v-8.2Zm4 0h2.3v1.12h.03c.32-.6 1.1-1.24 2.28-1.24 2.43 0 2.89 1.6 2.89 3.68v4.64h-2.4v-4.12c0-.98-.02-2.25-1.38-2.25-1.38 0-1.59 1.07-1.59 2.18v4.19h-2.4v-8.2Z"
        fill="currentColor"
      />
      <path
        d="M4.75 3.75h14.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ZennIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactIcon({ kind }: { kind: ContactLink["kind"] }) {
  switch (kind) {
    case "mail":
      return <MailIcon />;
    case "github":
      return <GitHubIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    case "zenn":
      return <ZennIcon />;
  }
}

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__copy">
          <div className="section-eyebrow">Contact</div>
          <p>{profile.name}</p>
        </div>
        <div className="site-footer__links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="site-footer__link"
              aria-label={link.label}
              target={isExternalLink(link.href) ? "_blank" : undefined}
              rel={isExternalLink(link.href) ? "noreferrer" : undefined}
            >
              <span className="site-footer__icon">
                <ContactIcon kind={link.kind} />
              </span>
              <span className="site-footer__label">
                {link.kind === "mail"
                  ? link.label + ": " + profile.email
                  : link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
