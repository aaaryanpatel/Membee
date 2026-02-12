const MEMBEE_SSO_BASE = import.meta.env.VITE_MEMBEE_SSO_URL || 'https://members.membee.com/feeds/sso';

const portals = [
  {
    key: 'applicant',
    label: 'Applicant',
    appId: import.meta.env.VITE_MEMBEE_APPLICANT_APP_ID || 'applicant-portal',
    redirectUri: import.meta.env.VITE_MEMBEE_APPLICANT_REDIRECT || `${window.location.origin}/applicant/callback`
  },
  {
    key: 'office',
    label: 'Office',
    appId: import.meta.env.VITE_MEMBEE_OFFICE_APP_ID || 'office-portal',
    redirectUri: import.meta.env.VITE_MEMBEE_OFFICE_REDIRECT || `${window.location.origin}/office/callback`
  },
  {
    key: 'reviewer',
    label: 'Reviewer',
    appId: import.meta.env.VITE_MEMBEE_REVIEWER_APP_ID || 'reviewer-portal',
    redirectUri: import.meta.env.VITE_MEMBEE_REVIEWER_REDIRECT || `${window.location.origin}/reviewer/callback`
  }
];

function createSsoUrl({ appId, redirectUri, key }) {
  const url = new URL(MEMBEE_SSO_BASE);
  url.searchParams.set('appId', appId);
  url.searchParams.set('role', key);
  url.searchParams.set('redirect_uri', redirectUri);
  return url.toString();
}

export default function App() {
  return (
    <main className="container">
      <h1>Membee SSO Login</h1>
      <p className="subtitle">All users already holding a membership should sign in via Membee SSO.</p>

      <section className="grid">
        {portals.map((portal) => (
          <article className="card" key={portal.key}>
            <h2>{portal.label}</h2>
            <p>Use the same Membee account and continue to the {portal.label.toLowerCase()} portal.</p>
            <a className="button" href={createSsoUrl(portal)}>
              Continue with Membee
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
