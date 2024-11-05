import { Group, ScrollArea } from '@mantine/core';
import { Logo } from '@/components/auth/icons/logo';
import { SideBarConfiguration } from '@/components/auth/icons/side_bar_configuration';
import { SideBarDirection } from '@/components/auth/icons/side_bar_direction';
import { SideBarDossier } from '@/components/auth/icons/side_bar_dossier';
import { SideBarProjet } from '@/components/auth/icons/side_bar_projet';
import { SideBarProtection } from '@/components/auth/icons/side_bar_protection';
import { LinksGroup } from '@/components/nav_bar/navbar_links_group/navbar_links_group';
import { User_button } from '@/components/nav_bar/user_button/user_button';
import classes from './navbar_nested.module.scss';

const mockdata = [
  {
    label: 'Configuration',
    icon: SideBarConfiguration,
    initiallyOpened: true,
    links: [
      { label: 'Utilisateurs', link: '/' },
      { label: 'Base', link: '/' },
      { label: 'Contrôle', link: '/' },
      { label: 'Workflow', link: '/' },
      { label: 'Alertes', link: '/' },
      { label: 'Rôles', link: '/' },
      { label: 'Préferences', link: '/' },
      { label: 'Calendrier', link: '/' },
    ],
  },
  { label: 'Dossier', icon: SideBarDossier },
  { label: 'Projet', icon: SideBarProjet },
  { label: 'Direction Technique', icon: SideBarDirection },
  { label: 'Protection', icon: SideBarProtection },
];

export function Navbar_nested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo whiteText />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <User_button />
      </div>
    </nav>
  );
}
