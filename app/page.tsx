import Image from "next/image";

const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "HTML5",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Vuetify",
    ],
  },
  {
    group: "Backend",
    items: ["PHP", "Laravel", "Livewire", "REST API", "Node.js", "Python", "Flask"],
  },
  {
    group: "Data and tooling",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Jira",
    ],
  },
];

const experiences = [
  {
    company: "U9 Co., Ltd",
    note: "formerly Ooredoo Myanmar",
    role: "Senior Software Development Engineer",
    period: "Sep 2024 - Present",
    points: [
      "Partners with demand teams and project managers to clarify scope and align delivery expectations.",
      "Designs scalable workflows, leads development, and coordinates smooth releases with SRE and DevOps teams.",
      "Maintains and improves existing systems with new features, better performance, and cleaner integrations.",
    ],
  },
  {
    company: "Modern Future IT Co., Ltd",
    role: "Senior Web Developer",
    period: "Dec 2023 - Sep 2024",
    points: [
      "Led admin dashboard development for merchant and agent systems.",
      "Created API services for frontend and mobile applications.",
      "Mentored junior developers and managed deployments on DigitalOcean and Alibaba Cloud.",
    ],
  },
  {
    company: "Tamron Technology Co., Ltd",
    role: "Full Stack Web Developer",
    period: "May 2022 - Nov 2023",
    points: [
      "Built web applications, landing pages, admin dashboards, and REST APIs.",
      "Integrated payment flows with PayPal, WeChat Pay, and AliPay.",
      "Collaborated with UI, mobile, and QA teams while configuring cloud deployments.",
    ],
  },
  {
    company: "BusyBees Expert Services Co., Ltd",
    role: "Web Developer",
    period: "Nov 2021 - Apr 2022",
    points: [
      "Redesigned system flows and integrated the Dinger payment gateway.",
      "Developed dashboards and REST APIs for web and mobile platforms.",
      "Managed production deployment on Bluehost.",
    ],
  },
  {
    company: "Secure Link Co., Ltd",
    role: "Junior Web Developer",
    period: "Jun 2020 - Oct 2021",
    points: [
      "Developed frontend and UI components for internal dashboards.",
      "Supported senior developers across feature delivery and interface polish.",
    ],
  },
];

const projects = [
  "U9 SIM Swap Operation Portal",
  "U9 ESIM Operation Portal",
  "MGL Express Myanmar",
  "Medical Insurance Claim Operation Portal",
  "ABC Browser + VPN",
  "BusyBees Myanmar",
  "Queuing Management System",
  "Lottery Game",
  "Akoneya Life Style App",
  "Learn Myanmar",
  "Bus Ticket System",
];

const stats = [
  { value: "6+", label: "Years building production web systems" },
  { value: "11", label: "Highlighted delivery and platform projects" },
  { value: "3", label: "Core strengths: frontend, backend, deployment" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#17201f]">
      <section className="border-b border-[#d8d8ce] bg-[#fdfdf9]">
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 content-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="mb-5 w-fit border border-[#c9d6d2] bg-[#eff7f5] px-3 py-1 text-sm font-semibold uppercase text-[#186455]">
              Full Stack Web Developer
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#101817] sm:text-6xl lg:text-7xl">
              I build reliable web platforms for business operations.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4c5a57] sm:text-xl">
              Senior Software Engineer with 6+ years of experience delivering scalable
              system like E-commerce, POS, LMS, CMS, Logistics, Telecom, VPN, and
              real-time application systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center border border-[#17201f] bg-[#17201f] px-5 text-sm font-semibold uppercase text-white transition hover:bg-[#304441]"
                href="mailto:thuranaingrocm77@gmail.com"
              >
                Contact Me
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-[#b7beb8] bg-white px-5 text-sm font-semibold uppercase text-[#17201f] transition hover:border-[#17201f]"
                href="/ThuraNaing-Resume.pdf"
              >
                Download CV
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-[#d8d8ce] bg-white p-4">
                  <div className="text-3xl font-semibold text-[#186455]">{stat.value}</div>
                  <p className="mt-2 text-sm leading-5 text-[#5f6b68]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md border border-[#d8d8ce] bg-white p-3 shadow-[12px_12px_0_#cfdad6]">
              <Image
                src="/profile/passport.jpg"
                alt="Portrait of Thura Naing"
                width={330}
                height={390}
                priority
                className="aspect-[5/6] w-full object-cover object-top"
              />
              <div className="grid gap-3 border-t border-[#d8d8ce] p-5 text-sm text-[#4c5a57]">
                <div>
                  <span className="font-semibold text-[#17201f]">Location:</span> Yangon,
                  Myanmar
                </div>
                <div>
                  <span className="font-semibold text-[#17201f]">Email:</span>{" "}
                  <a className="hover:text-[#186455]" href="mailto:thuranaingrocm77@gmail.com">
                    thuranaingrocm77@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-[#17201f]">Phone:</span>{" "}
                  <a className="hover:text-[#186455]" href="tel:+959256153127">
                    +95 925 615 3127
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 pt-1 font-semibold text-[#186455]">
                  <a href="https://www.linkedin.com/in/thura-naing-03b7611ab/">LinkedIn</a>
                  <a href="https://github.com/thuranaing10">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="skills">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#b35d2a]">Technical profile</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#101817]">
              Comfortable across product interfaces, backend services, data stores, and release
              tooling.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {skills.map((skill) => (
              <section key={skill.group} className="border border-[#d8d8ce] bg-white p-6">
                <h3 className="text-xl font-semibold text-[#17201f]">{skill.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="border border-[#d8d8ce] bg-[#f7f7f2] px-3 py-1 text-sm text-[#4c5a57]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8d8ce] bg-[#17201f] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[#8bd3c7]">Experience</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight">
              From junior delivery work to senior engineering leadership.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#c7d5d1]">
              I have shipped internal platforms, customer-facing portals, payment integrations,
              API layers, and cloud-hosted admin systems for teams across telecom, logistics,
              finance, learning, and commerce.
            </p>
          </div>
          <div className="space-y-4">
            {experiences.map((job) => (
              <article key={`${job.company}-${job.role}`} className="border border-[#3b4a47] bg-[#202d2a] p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="mt-1 text-[#8bd3c7]">
                      {job.company}
                      {job.note ? <span className="text-[#a8bbb6]"> - {job.note}</span> : null}
                    </p>
                  </div>
                  <p className="text-sm font-semibold uppercase text-[#f1b26a]">{job.period}</p>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-[#d9e4e1]">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#8bd3c7]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="projects">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#b35d2a]">Selected projects</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#101817]">
                Operational systems with practical impact.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#4c5a57]">
              A cross-section of work covering full-stack delivery, admin panels, REST APIs, and
              specialist backend services.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project}
                className="border border-[#d8d8ce] bg-white p-5 transition hover:border-[#186455]"
              >
                <p className="text-sm font-semibold text-[#b35d2a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-[#17201f]">{project}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d8ce] bg-[#fdfdf9] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <article className="border border-[#d8d8ce] bg-white p-6">
            <p className="text-sm font-semibold uppercase text-[#b35d2a]">Education</p>
            <h2 className="mt-3 text-2xl font-semibold">Bachelor of Computer Science (Hons)</h2>
            <p className="mt-3 text-[#4c5a57]">University of Computer Studies, Magway</p>
          </article>
          <article className="border border-[#d8d8ce] bg-white p-6">
            <p className="text-sm font-semibold uppercase text-[#b35d2a]">Language</p>
            <h2 className="mt-3 text-2xl font-semibold">English</h2>
            <p className="mt-3 text-[#4c5a57]">Upper intermediate, proficient in all four skills.</p>
          </article>
          <article className="border border-[#d8d8ce] bg-white p-6">
            <p className="text-sm font-semibold uppercase text-[#b35d2a]">Availability</p>
            <h2 className="mt-3 text-2xl font-semibold">Senior full-stack work</h2>
            <p className="mt-3 text-[#4c5a57]">
              Best fit for Laravel, React, Next.js, Vue, REST API, dashboard, and platform delivery.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#bfe2db] px-5 py-20 sm:px-8 lg:px-12" id="contact">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#174f45]">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#101817]">
              Need a developer who can own the full path from interface to deployment?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center border border-[#17201f] bg-[#17201f] px-5 text-sm font-semibold uppercase text-white transition hover:bg-[#304441]"
              href="mailto:thuranaingrocm77@gmail.com"
            >
              Email
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center border border-[#17201f] bg-transparent px-5 text-sm font-semibold uppercase text-[#17201f] transition hover:bg-white"
              href="https://github.com/thuranaing10"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
