// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Akos Nyerges and the members of the lab at Harvard Medical School, Department of Genetics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Press coverage, talks, awards, and news from the Nyerges Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-resources",
          title: "Resources",
          description: "Plasmids, bacterial strains, protocols, and code from the Nyerges Lab on Addgene and GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Contact Akos Nyerges and the lab at Harvard Medical School. Open positions for postdocs, visiting students, and undergraduates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-phys-org-breakthrough-method-predicts-resistance-to-antibiotics-under-development",
          title: 'Phys.org: Breakthrough method predicts resistance to antibiotics under development',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-06-15-physorg-resistance-prediction/";
            },},{id: "news-pnas-39-in-this-issue-39-highlight",
          title: 'PNAS &amp;#39;In This Issue&amp;#39; highlight',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2018-06-19-pnas-in-this-issue/";
            },},{id: "news-gen-new-recombineering-method-may-overcome-key-obstacle-in-genetically-engineering-bacteria",
          title: 'GEN: New Recombineering Method May Overcome Key Obstacle in Genetically Engineering Bacteria',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2020-06-16-genengnews-recombineering/";
            },},{id: "news-interview-amp-ndash-drug-discovery-news-a-pioneer-of-the-multiplex-frontier",
          title: 'Interview &amp;amp;ndash; Drug Discovery News: A pioneer of the multiplex frontier',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-03-15-drug-discovery-news/";
            },},{id: "news-designing-more-useful-bacteria-amp-ndash-harvard-medical-school",
          title: 'Designing More Useful Bacteria &amp;amp;ndash; Harvard Medical School',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-03-15-hms-news/";
            },},{id: "news-interview-amp-ndash-nature-podcast",
          title: 'Interview &amp;amp;ndash; Nature Podcast',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-03-15-nature-podcast/";
            },},{id: "news-interview-genetic-engineering-amp-biotechnology-news",
          title: 'Interview @ Genetic Engineering &amp;amp; Biotechnology News',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-03-22-genengnews-interview/";
            },},{id: "news-nature-news-amp-views-engineered-cells-repel-viral-attacks",
          title: 'Nature News &amp;amp; Views: Engineered cells repel viral attacks',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-03-28-nature-news-views/";
            },},{id: "news-rewritten-genetic-code-allows-bacteria-to-fend-off-viral-attacks",
          title: 'Rewritten genetic code allows bacteria to fend off viral attacks',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-05-science-feature/";
            },},{id: "news-highlight-in-synthetic-biology",
          title: 'Highlight in Synthetic Biology',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-08-synbio-journal-highlight/";
            },},{id: "news-e-coli-that-is-recoded-to-be-virus-resistant-may-aid-drug-production",
          title: 'E. coli that is recoded to be virus-resistant may aid drug production',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-10-newscientist-recoded/";
            },},{id: "news-highlight-in-nature-biotechnology",
          title: 'Highlight in Nature Biotechnology',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-15-nature-biotech-highlight/";
            },},{id: "news-interview-amp-ndash-the-scientist-by-anna-napolitano-ph-d",
          title: 'Interview &amp;amp;ndash; The Scientist, by Anna Napolitano, Ph.D.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-04-21-thescientist-interview/";
            },},{id: "news-selected-as-one-of-the-most-important-discoveries-at-hms-in-2023",
          title: 'Selected as one of the most important discoveries at HMS in 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-20-hms-year-in-science/";
            },},{id: "news-highlight-by-the-department-of-energy-office-of-science",
          title: 'Highlight by the Department of Energy Office of Science',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-06-11-doe-highlight/";
            },},{id: "news-dyss-39-24-speaker-and-departmental-visit-at-university-of-washington",
          title: 'DYSS &amp;#39;24 Speaker and Departmental Visit at University of Washington',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-16-dyss-uw/";
            },},{id: "news-session-chair-synthetic-biology-for-drug-discovery-and-therapy",
          title: 'Session Chair @ Synthetic Biology for Drug Discovery and Therapy',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-09-dot-session-chair/";
            },},{id: "news-presentation-the-12th-international-mrna-health-conference",
          title: 'Presentation @ the 12th International mRNA Health Conference',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-10-mrna-conference/";
            },},{id: "news-presenting-k99-work-nih-synthetic-biology-consortium-meeting",
          title: 'Presenting K99 work @ NIH Synthetic Biology Consortium Meeting',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-10-nih-synbio-announce/";
            },},{id: "news-recorded-talk-from-nih-synthetic-biology-consortium-meeting",
          title: 'Recorded talk from NIH Synthetic Biology Consortium Meeting',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-26-nih-synbio-recording/";
            },},{id: "news-why-is-it-so-hard-to-rewrite-a-genome",
          title: 'Why is it so hard to rewrite a genome?',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-18-nature-rewrite-genome/";
            },},{id: "news-scientists-are-learning-to-rewrite-the-code-of-life",
          title: 'Scientists Are Learning to Rewrite the Code of Life',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-08-01-nyt-zimmer/";
            },},{id: "news-chairing-dot-39-s-synbio-for-drug-discovery-amp-development-symposium",
          title: 'Chairing DOT&amp;#39;s SynBio for Drug Discovery &amp;amp; Development Symposium',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-14-dot-symposium-chair/";
            },},{id: "news-akos-receives-the-rising-stars-in-engineering-in-health-award",
          title: 'Akos receives the Rising Stars in Engineering in Health Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-28-rising-stars-award/";
            },},{id: "news-aiche-boston-meet-the-faculty-candidates-poster-session",
          title: 'AIChE Boston: Meet the Faculty Candidates Poster Session',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-15-aiche-faculty-candidates/";
            },},{id: "news-talk-aiche-annual-meeting-in-boston",
          title: 'Talk @ AIChE Annual Meeting in Boston',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-15-aiche-talk/";
            },},{id: "news-zombie-cells-created-by-transplanting-genomes-into-dead-bacteria",
          title: 'Zombie cells created by transplanting genomes into dead bacteria',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-03-23-newscientist-zombie-cells/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6B%6F%73_%6E%79%65%72%67%65%73@%68%6D%73.%68%61%72%76%61%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Dn8nr-UAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1581-490X", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AkosNy", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/akosnyerges", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/akosnyerges", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/akosnyerges.bsky.social", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
