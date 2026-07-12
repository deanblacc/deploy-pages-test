import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>Next.js static export for GitHub Pages.</h1>
          <p>
            This project is configured to deploy at the{" "}
            <a
              href="https://deanblacc.github.io/deploy-pages-test/"
              target="_blank"
              rel="noopener noreferrer"
            >
              /deploy-pages-test subpath
            </a>{" "}
            using a static Next.js export and GitHub Actions Pages workflow.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://nextjs.org/docs/app/building-your-application/deploying/static-exports"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Static Export Docs
          </a>
          <a
            className={styles.secondary}
            href="https://docs.github.com/pages"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Pages Docs
          </a>
        </div>
      </main>
    </div>
  );
}
