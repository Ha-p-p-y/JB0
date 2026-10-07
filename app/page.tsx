export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-2 text-blue-400 font-semibold">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold">
          Joel
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
          Computer Science Student
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400">
          I'm a curious and happy Computer Science student at
          <span className="text-white font-semibold"> MITS Kochi</span>. I enjoy
          building projects with Python and Artificial Intelligence, and my goal
          is to become an AI Engineer.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/Ha-p-p-y"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
          >
            GitHub
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-white hover:text-black"
          >
            My Projects
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="mt-6 text-gray-300 leading-8">
          I am Joel, a Computer Science student from MITS Kochi with a strong
          interest in Artificial Intelligence and Python programming. I love
          solving problems, learning new technologies, and creating projects
          that improve my programming skills.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">Skills</h2>

          <div className="mt-8 flex flex-wrap gap-4">
            {[
              "Python",
              "Artificial Intelligence",
              "Problem Solving",
              "Git & GitHub",
              "Programming",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-600 px-5 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold">Python Programs</h3>

            <p className="mt-3 text-gray-400">
              A collection of Python programs covering algorithms,
              problem-solving, and beginner-to-intermediate concepts.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold">GitHub Repository</h3>

            <p className="mt-3 text-gray-400">
              Explore my coding journey and projects on GitHub.
            </p>

            <a
              href="https://github.com/Ha-p-p-y"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-400 hover:underline"
            >
              Visit GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Goal */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">Career Goal</h2>

          <p className="mt-6 text-gray-300">
            My ambition is to become an AI Engineer, building intelligent
            applications that solve real-world problems through Artificial
            Intelligence and Machine Learning.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Let's Connect</h2>

        <p className="mt-6 text-gray-400">GitHub:</p>

        <a
          href="https://github.com/Ha-p-p-y"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-blue-400 hover:underline"
        >
          github.com/Ha-p-p-y
        </a>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© 2026 Joel | Built with Next.js &amp; Tailwind CSS</p>
        </footer>
      </section>
    </main>
  );
}