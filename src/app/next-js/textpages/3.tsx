const Page = () => {
  return (
    <article>
      <header>
        <h1>Next.js Project Structure Guide</h1>
        <p className="lead">
          Understanding the basic structure of a Next.js project to organize and
          manage your code efficiently.
        </p>
      </header>
      <section>
        <h2>Introduction</h2>
        <p>
          Next.js is a powerful React framework that allows you to build
          server-side rendering and static web applications. Having a
          well-structured project can help in maintaining and scaling your
          application.
        </p>
      </section>
      <section>
        <h2>Basic Project Structure</h2>
        <p>A typical Next.js project has the following structure:</p>
        {/* prettier-ignore */}
        <pre className="whitespace-pre"><code>{`/my-next-app
  |-- /pages
  |    |-- index.js
  |    |-- _app.js
  |    |-- _document.js
  |-- /public
  |    |-- favicon.ico
  |-- /styles
  |    |-- globals.css
  |-- /components
  |-- next.config.js
  |-- package.json
`}</code></pre>
      </section>
      <section>
        <h2>Folder and File Descriptions</h2>
        <h3>/pages</h3>
        <p>
          This directory contains all the page components for your application.
          Each file represents a route based on its filename.
        </p>
        <blockquote>
          Example: <code>pages/index.js</code> is the home page.
        </blockquote>
        <h4>Special Files</h4>
        <p>
          <strong>_app.js</strong> – Customizes the default App component.
        </p>
        <p>
          <strong>_document.js</strong> – Customizes the HTML Document.
        </p>

        <h3>/public</h3>
        <p>
          Static files like images, fonts, and other assets are stored here.
        </p>
        <figure>
          <figcaption>Public folder contains static assets.</figcaption>
        </figure>

        <h3>/styles</h3>
        <p>Contains global and modular CSS files.</p>

        <h3>/components</h3>
        <p>
          This directory is for reusable UI components used across your
          application.
        </p>

        <h3>Configuration Files</h3>
        <p>
          <code>next.config.js</code> – Used to customize the Next.js
          configuration.
        </p>
        <p>
          <code>package.json</code> – Lists the project dependencies and
          scripts.
        </p>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>
          Understanding and organizing your Next.js project structure
          effectively is key to maintaining a scalable and manageable codebase.
          Following this guide will help you get started with best practices in
          structuring your Next.js projects.
        </p>
        <p>
          For more detailed information, refer to the{" "}
          <a href="https://nextjs.org/docs">Next.js documentation</a>.
        </p>
      </section>
    </article>
  );
};

export { Page };
