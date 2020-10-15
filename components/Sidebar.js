/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
//Icons
import { GiVote, GiCrossedSwords } from 'react-icons/gi';
import { ImHome3, ImStatsBars } from 'react-icons/im';
import { FaChartPie } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={styles.sidebar}>
      <img
        src="/logo.png"
        height={100}
        width={100}
        className="sidebar-logo"
        alt="Logo"
      />

      <Link href="/" exact>
        <a
          className={
            router.pathname === '/'
              ? styles.sidebarLinkActive
              : styles.sidebarLink
          }
        >
          <IconContext.Provider value={{ className: styles.sidebarLinkIcon }}>
            <ImHome3 />
          </IconContext.Provider>
          &nbsp;&nbsp;<label>Home</label>
        </a>
      </Link>
      <Link href="/overview">
        <a
          className={
            router.pathname === '/overview'
              ? styles.sidebarLinkActive
              : styles.sidebarLink
          }
        >
          <IconContext.Provider value={{ className: styles.sidebarLinkIcon }}>
            <ImStatsBars />
          </IconContext.Provider>
          &nbsp;&nbsp;<label>Overview</label>
        </a>
      </Link>
      <Link href="/vote">
        <a
          className={
            router.pathname === '/vote'
              ? styles.sidebarLinkActive
              : styles.sidebarLink
          }
        >
          <IconContext.Provider value={{ className: styles.sidebarLinkIcon }}>
            <GiVote />
          </IconContext.Provider>
          &nbsp;&nbsp;<label>Vote</label>
        </a>
      </Link>
      <Link href="/charts">
        <a
          className={
            router.pathname === '/charts'
              ? styles.sidebarLinkActive
              : styles.sidebarLink
          }
        >
          <IconContext.Provider value={{ className: styles.sidebarLinkIcon }}>
            <FaChartPie />
          </IconContext.Provider>{' '}
          &nbsp;&nbsp;<label>Charts</label>
        </a>
      </Link>
      <Link href="/battleground">
        <a
          className={
            router.pathname === '/battleground'
              ? styles.sidebarLinkActive
              : styles.sidebarLink
          }
        >
          <IconContext.Provider value={{ className: styles.sidebarLinkIcon }}>
            <GiCrossedSwords />
          </IconContext.Provider>
          &nbsp;&nbsp;<label>BattleGround</label>
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
