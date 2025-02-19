import {Discord, Email, Github} from "@deemlol/next-icons";

export default function Clippy() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        kiedyś będzie coś pozdro
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://discordapp.com/users/205983099647950848"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Discord size={24} color="#FFFFFF" />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/kkazzann/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} color="#FFFFFF" />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:contact@kznlabs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email size={24} color="#FFFFFF" /> contact@kznlabs.com
        </a>
      </footer>
    </div>
  );
}
