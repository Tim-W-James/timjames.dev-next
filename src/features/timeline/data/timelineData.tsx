import adaThumbnail from "@assets/images/projects/ada.png";
import desktopArtThumbnail from "@assets/images/projects/desktop_art.png";
import gpsAndrodiGameThumbnail from "@assets/images/projects/gps_android_game.png";
import iqFocusThumbnail from "@assets/images/projects/iq_focus.png";
import journeysContinueThumbnail from "@assets/images/projects/journeyscontinue.png";
import keyboardThumbnail from "@assets/images/projects/keyboard_cad.jpg";
import proceduralTextThumbnail from "@assets/images/projects/procedural_text.png";
import pythonThumbnail from "@assets/images/projects/python.png";
import roverThumbnail from "@assets/images/projects/rover.jpeg";
import sharkShackThumbnail from "@assets/images/projects/shark_shack.jpg";
import townHouseThumbnail from "@assets/images/projects/town_house.jpg";
import weatherStationThumbnail from "@assets/images/projects/weather_station.jpg";
import LazyYoutubeVideo from "@components/LazyYoutubeVideo";
import Tooltip from "@components/Tooltip";
import { clsx } from "clsx";
import Link from "next/link";
import { BsFillBookFill, BsGithub } from "react-icons/bs";
import { FaHamburger, FaItchIo } from "react-icons/fa";
import { SiEslint, SiFigma, SiStorybook } from "react-icons/si";
import type TimelineItemData from "../types/timelineData";

const timelineData: TimelineItemData[] = [
  {
    startDate: new Date("2023"),
    endDate: new Date("2023"),
    title: "Aged-Care Food Delivery System",
    body: (
      <>
        Full-stack{" "}
        <Tooltip
          text="ERP"
          tooltip="
      Enterprise Resource Planning"
        />{" "}
        application used to coordinate staff and manage deliveries.
      </>
    ),
    category: "Agile Digital",
    isFeatured: false,
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2023"),
    title: "timjames.dev",
    body: (
      <>
        Static <Tooltip text="SPA" tooltip="Single Page Application" /> used as
        a portfolio website. Includes a{" "}
        <Link
          className={clsx("link")}
          href="https://storybook.timjames.dev"
          rel="noreferrer"
          target="_blank"
          title="View components on Storybook"
        >
          custom component library
        </Link>
        , <Tooltip text="UI" tooltip="User Interface" /> designs created on{" "}
        <Link
          className={clsx("link")}
          href="https://www.figma.com/file/pVOwmsYdIymurR4GmEFry1/Portfolio?node-id=9%3A117&t=c2WxYEnrq61XsoNL-1"
          rel="noreferrer"
          target="_blank"
          title="View design on Figma"
        >
          Figma
        </Link>
        , and robust tooling such as{" "}
        <Link
          className={clsx("link")}
          href="/blog/type-safe-tailwind-and-scss-modules-20mj"
          rel="noreferrer"
          target="_blank"
          title="Read more"
        >
          strict typing for CSS classes
        </Link>
        .
      </>
    ),
    category: "Personal Project",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Sass",
      "Figma",
      "Storybook",
      "Netlify",
      "GitHub Actions",
    ],
    isFeatured: false,
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/timjames.dev",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Storybook components",
        url: "https://storybook.timjames.dev",
        icon: <SiStorybook aria-label="Storybook" />,
      },
      {
        text: "Figma design",
        // biome-ignore lint/security/noSecrets: public Figma design
        url: "https://www.figma.com/file/pVOwmsYdIymurR4GmEFry1/Portfolio?node-id=9%3A117&t=c2WxYEnrq61XsoNL-1",
        icon: <SiFigma aria-label="Figma" />,
      },
      {
        text: "ESLint config",
        url: "https://www.npmjs.com/package/@tim-w-james/eslint-config",
        icon: <SiEslint aria-label="ESLint" />,
      },
    ],
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2023"),
    title: "Brodburger",
    body: (
      <>
        Feature upgrade for an online ordering and{" "}
        <Tooltip text="POS" tooltip="Point of Sale" /> app used by a local
        burger franchise.
      </>
    ),
    category: "Agile Digital",
    isFeatured: true,
    links: [
      {
        text: "Online ordering app",
        url: "https://brodburger.qhopper.com",
        icon: <FaHamburger aria-label="Burger" />,
      },
      {
        text: "Client website",
        url: "https://brodburger.com.au/",
      },
    ],
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "Toyota Finance Australia",
    body: (
      <>
        Identity & access management systems for a car finance and loans
        application.
      </>
    ),
    category: "Agile Digital",
    isFeatured: true,
    links: [
      {
        text: "TFA website",
        url: "https://www.toyota.com.au/car-finance",
      },
      {
        text: "Turo website",
        url: "https://turo.com/au/en",
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2022"),
    title: "CSIRO Source IP",
    body: (
      <>
        Maintenance, monitoring and security patching of a patent filing system.
      </>
    ),
    category: "Agile Digital",
    isFeatured: false,
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "Bachelor of Information Technology",
    body: (
      <>
        Graduated from the{" "}
        <Link
          className={clsx("link")}
          href="https://www.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title="ANU"
        >
          Australian National University
        </Link>{" "}
        with a Bachelor of Information Technology and a{" "}
        <Tooltip text="GPA" tooltip="Grade Point Average" /> of 6.3/7.
      </>
    ),
    category: "Career Event",
    isFeatured: false,
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "ForgeRock Identity Cloud Certified Professional",
    body: (
      <>
        Got certification for{" "}
        <Link
          className={clsx("link")}
          href="https://www.forgerock.com/platform/identity-cloud"
          rel="noreferrer"
          target="_blank"
          title="FIDC"
        >
          ForgeRock Identity Cloud
        </Link>
        , an identity and access management platform.
      </>
    ),
    category: "Career Event",
    isFeatured: false,
    links: [
      {
        text: "Credly",
        url: "https://www.credly.com/badges/23372af0-4d55-41e9-a3a3-7d3d55c380fc",
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Siding  Observatory VR Experience",
    body: (
      <>
        <LazyYoutubeVideo
          title="Siding Spring Observatory VR Experience"
          videoId="iNKi8JYBmeo"
        />
        Part of the{" "}
        <Link
          className={clsx("link")}
          href="https://comp.anu.edu.au/TechLauncher/"
          rel="noreferrer"
          target="_blank"
          title="Industry Networking Program"
        >
          ANU TechLauncher program
        </Link>
        , I worked with a group of other students and collaborated with the{" "}
        <Link
          className={clsx("link")}
          href="https://rsaa.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title="RSAA Website"
        >
          ANU Research School of Astronomy and Astrophysics
        </Link>
        . The project involved creating a virtual reality experience for the{" "}
        <Link
          className={clsx("link")}
          href="https://www.oculus.com/experiences/quest/"
          rel="noreferrer"
          target="_blank"
          title="Portable VR Headset"
        >
          Oculus Quest
        </Link>{" "}
        headset (also ported to Android) where users could view and interact
        with various telescopes at the{" "}
        <Link
          className={clsx("link")}
          href="https://www.sidingspringobservatory.com.au/"
          rel="noreferrer"
          target="_blank"
          title="Australia's Largest Observatory"
        >
          Siding Spring Observatory
        </Link>
        , for educational and outreach purposes. As spokesperson for the
        project, I led my team to exceed our client&apos;s expectations and were
        awarded best pitch.
      </>
    ),
    category: "Australian National University",
    technologies: ["Unity", "Oculus", "Android", "CSharp", "Premiere"],
    isFeatured: false,
    links: [
      {
        text: "Landing page for DREAMS",
        url: "https://sites.google.com/view/2021-s1-techlauncher-dreams/home",
      },
      {
        text: "Landing page for AAT",
        url: "https://sites.google.com/view/2021-s2-techlauncher-dreams/home",
      },
      {
        text: "Source code",
        url: "https://github.com/VR-Observatory/SidingSpringObservatory",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Ada Concurrent Programming",
    body: (
      <>
        Several projects using the{" "}
        <Link
          className={clsx("link")}
          href="https://learn.adacore.com/courses/intro-to-ada/index.html"
          rel="noreferrer"
          target="_blank"
          title="Strict Concurrent Programming Language"
        >
          Ada
        </Link>{" "}
        programming language with an emphasis on concurrency and networking. I
        built a distributed communication system, and a concurrent routing
        algorithm.
      </>
    ),
    thumbnail: adaThumbnail,
    category: "Australian National University",
    isFeatured: false,
    technologies: ["Ada"],
    links: [
      {
        text: "Communication system",
        url: "https://github.com/Tim-W-James/gliding-in-space",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Routing Calculator",
        url: "https://github.com/Tim-W-James/routing-calculator",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Ada Reference Code",
        url: "https://github.com/Tim-W-James/Ada-Reference-Code",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Started Working at Agile Digital",
    body: (
      <>
        Started a position at{" "}
        <Link
          className={clsx("link")}
          href="https://agiledigital.com.au/"
          rel="noreferrer"
          target="_blank"
          title="Agile Digital website"
        >
          Agile Digital
        </Link>{" "}
        as a junior software engineer, a company based in Canberra, Australia.
        Agile Digital has worked with a variety of{" "}
        <Link
          className={clsx("link")}
          href="https://agiledigital.com.au/clients/"
          rel="noreferrer"
          target="_blank"
          title="Agile Digital clients"
        >
          clients
        </Link>{" "}
        including{" "}
        <Link
          className={clsx("link")}
          href="https://agiledigital.com.au/case-studies/working-with-australias-favourite-car-brand-to-scale-online-security/"
          rel="noreferrer"
          target="_blank"
          title="Car finance and loans"
        >
          Toyota Finance Australia
        </Link>
        ,{" "}
        <Link
          className={clsx("link")}
          href="https://agiledigital.com.au/case-studies/allhomes/"
          rel="noreferrer"
          target="_blank"
          title="Real estate business"
        >
          Allhomes
        </Link>
        , and{" "}
        <Link
          className={clsx("link")}
          href="https://agiledigital.com.au/case-studies/connecting-researchers-to-australian-industry-innovation/"
          rel="noreferrer"
          target="_blank"
          title="Commonwealth Scientific and Industrial Research Organisation"
        >
          CSIRO
        </Link>
        .
      </>
    ),
    category: "Career Event",
    isFeatured: false,
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Machine Learning Data Visualizations & Analysis",
    body: (
      <>
        Jupyter notebook containing templates for data visualisation using{" "}
        <Link
          className={clsx("link")}
          href="https://matplotlib.org/"
          rel="noreferrer"
          target="_blank"
          title="Data Visualisation Library"
        >
          Matplotlib
        </Link>
        , machine learning (regression, classification, decision trees, and
        clustering) using{" "}
        <Link
          className={clsx("link")}
          href="https://scikit-learn.org/stable/"
          rel="noreferrer"
          target="_blank"
          title="Machine Learning Library"
        >
          scikit-learn
        </Link>
        , and examples of{" "}
        <Tooltip text="SQL" tooltip="Structured Query Language" /> queries.
      </>
    ),
    category: "Australian National University",
    thumbnail: pythonThumbnail,
    isFeatured: false,
    technologies: ["Python", "SQL", "Jupyter"],
    links: [
      {
        text: "Python reference code",
        url: "https://github.com/Tim-W-James/Python-Data-Reference-Code",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "Finance Tracker & Homelab",
    body: (
      <>
        Tooling to categorise a{" "}
        <Tooltip text="CSV" tooltip="Comma Separated Values" /> of bank
        transactions using natural language processing, then upload them to a
        self-hosted finance system called{" "}
        <Link
          className={clsx("link")}
          href="https://www.firefly-iii.org/"
          rel="noreferrer"
          target="_blank"
          title="Finance manager"
        >
          Firefly III
        </Link>
        . I used a{" "}
        <Link
          className={clsx("link")}
          href="https://www.raspberrypi.org/"
          rel="noreferrer"
          target="_blank"
          title="Single-Board Computer"
        >
          Raspberry Pi
        </Link>{" "}
        to host the system with{" "}
        <Link
          className={clsx("link")}
          href="https://www.docker.com/"
          rel="noreferrer"
          target="_blank"
          title="Container System"
        >
          Docker
        </Link>
        , and configured a custom{" "}
        <Tooltip text="DNS" tooltip="Domain Name System" /> server using{" "}
        <Link
          className={clsx("link")}
          href="https://pi-hole.net/"
          rel="noreferrer"
          target="_blank"
          title="DNS Server"
        >
          PiHole
        </Link>{" "}
        and an{" "}
        <Link
          className={clsx("link")}
          href="https://www.nginx.com/"
          rel="noreferrer"
          target="_blank"
          title="Proxy"
        >
          NGINX
        </Link>{" "}
        proxy.
      </>
    ),
    category: "Personal Project",
    isFeatured: false,
    technologies: ["Python", "Docker", "Raspberry Pi", "NGINX"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/mqtt-analyser",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2022"),
    endDate: new Date("2022"),
    title: "MQTT Analyser",
    body: (
      <>
        <Tooltip text="CLI" tooltip="Command Line Interface" /> application that
        analyses the performance of an{" "}
        <Tooltip text="MQTT" tooltip="Internet of Things messaging standard" />{" "}
        broker.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    technologies: ["TypeScript", "MQTT"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/mqtt-analyser",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2021"),
    endDate: new Date("2021"),
    title: "Journeys Continue Website",
    body: (
      <>
        Website for{" "}
        <Link
          className={clsx("link")}
          href="https://journeyscontinue.com.au/"
          rel="noreferrer"
          target="_blank"
          title="Website"
        >
          Journeys Continue
        </Link>
        , a local business for social work, disability and aged care services.
        Contains a <Tooltip text="PHP" tooltip="Backend Scripting Language" />{" "}
        contact form. Initially built with raw{" "}
        <Tooltip text="HTML" tooltip="HyperText Markup Language" />,{" "}
        <Tooltip text="CSS" tooltip="Cascading Style Sheets" />, and{" "}
        <Tooltip text="Bootstrap" tooltip="Component Library" />. Later
        rewritten to in{" "}
        <Tooltip text="NextJS" tooltip="SSR Framework for React" /> and{" "}
        <Tooltip text="Sanity CMS" tooltip="Headless CMS" />, making the site{" "}
        <Tooltip text="SEO" tooltip="Search Engine Optimisation" /> optimised
        and allowing the client to manage their own content.
      </>
    ),
    category: "Personal Project",
    isFeatured: false,
    thumbnail: journeysContinueThumbnail,
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "PHP",
      "TypeScript",
      "React",
      "NextJS",
      "SanityCMS",
    ],
    links: [
      {
        text: "CMS Site Builder Blog",
        url: "/blog/creating-a-site-builder-with-nextjs-and-sanity-cms-1e61",
      },
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Journeys-Continue",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "JourneysContinue.com.au",
        url: "https://journeyscontinue.com.au/",
      },
    ],
  },
  {
    startDate: new Date("2020"),
    endDate: new Date("2020"),
    title: "GPS Android Game",
    body: (
      <>
        Group project at{" "}
        <Link
          className={clsx("link")}
          href="https://www.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title="Australian National University"
        >
          ANU
        </Link>{" "}
        where we created an Android app that uses Google Maps API to allows
        players to use their{" "}
        <Tooltip text="GPS" tooltip="Global Positioning System" /> to find
        treasure and compete on a leaderboard.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    thumbnail: gpsAndrodiGameThumbnail,
    technologies: ["Java", "Android", "Firebase"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Java-GPS-Android-Game",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Java reference code",
        url: "https://github.com/Tim-W-James/Java-Reference-Code",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2020"),
    endDate: new Date("2020"),
    title: "Synchronous Serial Message Passing",
    body: (
      <>
        Simple synchronous serial protocol for sending full packets of data to a
        receiver, created with{" "}
        <Tooltip text="ARMv7" tooltip="CPU Architecture" /> assembly.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    technologies: ["ARMv7"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/ARMv7-Synchronous-Serial-Message-Passing",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2020"),
    endDate: new Date("2020"),
    title: "Digital Synthesizer ADSR",
    body: (
      <>
        Program that implements digital synthesizer with{" "}
        <Tooltip text="ADSR" tooltip="attack-decay-sustain-release" /> envelope
        functionality in <Tooltip text="ARMv7" tooltip="CPU Architecture" />{" "}
        assembly.
      </>
    ),
    category: "Australian National University",
    isFeatured: true,
    technologies: ["ARMv7"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/ARMv7-Digital-Synthesizer-ADSR",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2019"),
    endDate: new Date("2019"),
    title: "Interactive Procedural Art",
    body: (
      <>
        An experimental interactive experience where players create their own
        pictures in front of a simulated live audience that reacts to the
        decisions of the player.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    thumbnail: proceduralTextThumbnail,
    technologies: ["JavaScript", "p5js"],
    links: [
      {
        text: "Live demo",
        url: "https://interactive-procedural-art.timjames.dev",
      },
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/JavaScript-Interactive-Procedural-Text-Experience",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Artist statement",
        url: "https://github.com/Tim-W-James/JavaScript-Interactive-Procedural-Text-Experience/blob/master/artist-statement.md",
      },
      {
        text: "Collection of other p5.js art projects",
        url: "https://github.com/Tim-W-James/JavaScript-p5-Collection",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2019"),
    endDate: new Date("2019"),
    title: "Interactive Desktop Sim",
    body: (
      <>
        Interactive art piece based on the theme &apos;interactive picture
        window&apos;.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    thumbnail: desktopArtThumbnail,
    technologies: ["JavaScript", "p5js"],
    links: [
      {
        text: "Live demo",
        url: "https://interactive-desktop-sim.timjames.dev",
      },
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/JavaScript-Interactive-Desktop-Sim",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Artist statement",
        url: "https://github.com/Tim-W-James/JavaScript-Interactive-Desktop-Sim/blob/master/artist-statement.md",
      },
      {
        text: "Collection of other p5.js art projects",
        url: "https://github.com/Tim-W-James/JavaScript-p5-Collection",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2019"),
    endDate: new Date("2019"),
    title: "Block Puzzle Game",
    body: (
      <>
        Group project where we created an app based on{" "}
        <Tooltip text="IQ Focus" tooltip="Board Game" /> which involved
        implementing the game logic and a{" "}
        <Tooltip text="GUI" tooltip="Graphical User Interface" />. My primary
        contributions was creating the game logic and a recursive algorithm to
        solve the game and provide hints.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    thumbnail: iqFocusThumbnail,
    technologies: ["Java"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Java-Block-Puzzle-Game",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2019"),
    endDate: new Date("2019"),
    title: "Sushi Go AI",
    body: (
      <>
        Artificial intelligence algorithm that can determine optimal moves to
        take in a game of <Tooltip text="Sushi Go" tooltip="Card Game" />. Uses
        a recursive minimax algorithm and{" "}
        <Link
          className={clsx("link")}
          href="https://www.haskell.org/"
          rel="noreferrer"
          target="_blank"
          title="Functional programming language"
        >
          Haskell
        </Link>
        , it can play against a human opponent or another{" "}
        <Tooltip text="AI" tooltip="Artificial Intelligence" />.
      </>
    ),
    category: "Australian National University",
    isFeatured: false,
    technologies: ["Haskell"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Sushi-Go-AI",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Related Sierpinski triangle project",
        url: "https://github.com/Tim-W-James/Sierpinski-Triangle",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Related 2D shape drawer project",
        url: "https://github.com/Tim-W-James/Shape-Drawer",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "Year 12 Graduation",
    body: (
      <>
        Graduated from{" "}
        <Link
          className={clsx("link")}
          href="https://www.canberrac.act.edu.au/"
          rel="noreferrer"
          target="_blank"
          title="Canberra College"
        >
          Canberra College
        </Link>{" "}
        with the Principal&apos;s Award for Information Technology and a{" "}
        <Link
          className={clsx("link")}
          href="https://training.gov.au/training/details/ict20115"
          rel="noreferrer"
          target="_blank"
          title="Qualification details"
        >
          Cert. II in Information, Digital Media & Technology
        </Link>
        .
      </>
    ),
    category: "Career Event",
    isFeatured: false,
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "Project Velocity",
    body: (
      <>
        <LazyYoutubeVideo title="Project Velocity" videoId="9QV3YlMHT-4" />A
        prototype game with procedurally generated levels and time manipulation
        mechanics.
        <br />
        <br />
        Explore unique procedurally generated levels and search for the exit,
        while fighting enemies and dodging traps as you go. There is also a
        treasure room hidden somewhere in the level, and a challenge room before
        the exit. Use melee attacks, fireballs and your dash abilities to defeat
        enemies.
        <br />
        <br />
        You can also slow down time temporarily, during which you will be able
        to move at full speed but enemies and projectiles will be slowed. While
        time is slowed your abilities are modified. Your melee attack becomes a
        shield, your fireball becomes a barrier that reflects enemy projectiles,
        and your dash becomes a blink that makes you invulnerable.
      </>
    ),
    category: "Canberra College",
    isFeatured: false,
    technologies: ["Unity", "CSharp"],
    links: [
      {
        text: "Download on itch.io",
        url: "https://explosivefridge.itch.io/project-velocity-prototype",
        icon: <FaItchIo />,
      },
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Time-Travel-Roguelite-Game",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "Design doc",
        // biome-ignore lint/security/noSecrets: public Google Docs
        url: "https://docs.google.com/document/d/1brkjiMgB8urmjMZFrbpasWn8Yp-qtIZmtJwBFIAfaxo/view?usp=sharing",
        icon: <BsFillBookFill aria-label="GitHub" />,
      },
      {
        text: "Custom shader",
        url: "https://github.com/Tim-W-James/Pixel-Perfect-Lighting",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "Weather Monitoring Station",
    body: (
      <>
        Python code for a weather station that can detect temperature, light
        level, wind speed and wind direction.
      </>
    ),
    category: "Canberra College",
    isFeatured: false,
    thumbnail: weatherStationThumbnail,
    technologies: ["Python", "Raspberry Pi"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Raspberry-Pi-Weather-Station",
        icon: <BsGithub aria-label="GitHub" />,
      },
    ],
  },
  {
    startDate: new Date("2018"),
    endDate: new Date("2018"),
    title: "Arduino Rover",
    body: (
      <>
        Group project where we created a rover that successfully navigated a
        maze autonomously using ultrasonic sensors and an algorithm I developed.
        Later reimplemented in a project at{" "}
        <Link
          className={clsx("link")}
          href="https://www.anu.edu.au/"
          rel="noreferrer"
          target="_blank"
          title="Australian National University"
        >
          ANU
        </Link>
        .
      </>
    ),
    category: "Canberra College",
    isFeatured: false,
    thumbnail: roverThumbnail,
    technologies: ["Arduino"],
    links: [
      {
        text: "Source code",
        url: "https://github.com/Tim-W-James/Arduino-Autonomous-Rover",
        icon: <BsGithub aria-label="GitHub" />,
      },
      {
        text: "TinkerCAD simulation",
        url: "https://www.tinkercad.com/things/gk0MvQ7Jkc8",
      },
    ],
  },
  {
    startDate: new Date("2017"),
    endDate: new Date("2017"),
    title: "Architecture Town House Design",
    body: <>Floor plan, landscaping and 3D render of a town house complex.</>,
    category: "Canberra College",
    isFeatured: false,
    thumbnail: townHouseThumbnail,
    technologies: ["Vectorworks"],
  },
  {
    startDate: new Date("2017"),
    endDate: new Date("2017"),
    title: "Keyboard CAD Model",
    body: (
      <>
        <Tooltip text="CAD" tooltip="Computer Aided Design" /> design and model
        for a keyboard.
      </>
    ),
    category: "Canberra College",
    isFeatured: false,
    thumbnail: keyboardThumbnail,
    technologies: ["Vectorworks"],
  },
  {
    startDate: new Date("2017"),
    endDate: new Date("2017"),
    title: "3D Platformer Game",
    body: (
      <>A third-person 3D platformer game featuring power-ups and vehicles.</>
    ),
    category: "Canberra College",
    isFeatured: false,
    technologies: ["Unreal"],
  },
  {
    startDate: new Date("2016"),
    endDate: new Date("2016"),
    title: "Logo Design",
    body: <>Graphic design for a seafood restaurant.</>,
    category: "Canberra College",
    isFeatured: false,
    searchOnly: true,
    thumbnail: sharkShackThumbnail,
  },
  {
    startDate: new Date("2016"),
    endDate: new Date("2016"),
    title: "Void Matrix Minecraft Map",
    body: (
      <>
        <LazyYoutubeVideo
          height="315"
          title="Void Matrix"
          videoId="HAFvKqTV4Fg"
          width="560"
        />
        Follow up to my popular Minecraft map, Labyrinth of Puzzles, the Void
        Matrix is a CTM custom adventure map which will challenge you with fun
        and unique levels filled with secrets. Pushed the limits of
        Minecraft&apos;s{" "}
        <Link
          className={clsx("link")}
          href="https://learn.microsoft.com/en-us/minecraft/creator/documents/commandblocks"
          rel="noreferrer"
          target="_blank"
          title="Minecraft Command Blocks"
        >
          command block scripting language
        </Link>
        .
      </>
    ),
    category: "Personal Project",
    isFeatured: false,
    searchOnly: true,
    links: [
      {
        text: "Map download",
        url: "https://www.minecraftmaps.com/adventure-maps/void-matrix-remastered",
      },
    ],
  },
  {
    startDate: new Date("2015"),
    endDate: new Date("2015"),
    title: "Labyrinth of Puzzles Minecraft Map",
    body: (
      <>
        Custom Minecraft map filled with puzzles, boss battles and more.
        Featured by YouTubers{" "}
        <Link
          className={clsx("link")}
          href="https://www.youtube.com/@EthosLab"
          rel="noreferrer"
          target="_blank"
          title="Youtube Channel"
        >
          EthosLab
        </Link>
        ,{" "}
        <Link
          className={clsx("link")}
          href="https://www.youtube.com/user/VintageBeef"
          rel="noreferrer"
          target="_blank"
          title="Youtube Channel"
        >
          VintageBeef
        </Link>
        , and{" "}
        <Link
          className={clsx("link")}
          href="https://www.youtube.com/user/PauseUnpause"
          rel="noreferrer"
          target="_blank"
          title="Youtube Channel"
        >
          PauseUnpause
        </Link>
        . One of my first introductions to programming, using Minecraft&apos;s{" "}
        <Link
          className={clsx("link")}
          href="https://learn.microsoft.com/en-us/minecraft/creator/documents/commandblocks"
          rel="noreferrer"
          target="_blank"
          title="Minecraft Command Blocks"
        >
          command block scripting language
        </Link>
        .
      </>
    ),
    category: "Personal Project",
    isFeatured: false,
    searchOnly: true,
    links: [
      {
        text: "Map download",
        url: "https://www.minecraftmaps.com/ctm-maps/the-labyrinth-of-puzzles",
      },
    ],
  },
] as const;

export default timelineData;
