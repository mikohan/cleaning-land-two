import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  // { id: 0, icon: 'uil uil-twitter', url: 'https://twitter.com/' },
  { id: 1, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/profile.php?id=61559201872996' },
  { id: 2, icon: 'uil uil-instagram', url: 'https://www.instagram.com/playa_cleaning' },
  { id: 3, icon: 'uil uil-youtube', url: 'https://www.youtube.com/@PlayaCleaningUS' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
