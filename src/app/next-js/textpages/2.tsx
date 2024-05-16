const Page = () => {
  return (
    <article>
      <header>
        <h1>Simple Hello World in Next.js</h1>
        <p className="lead">
          A step-by-step guide to creating a simple &quot;Hello World&quot;
          application in Next.js.
        </p>
      </header>
      <section>
        <h2>Introduction</h2>
        <p>
          Next.js is a powerful React framework that enables you to build
          server-side rendering and static web applications effortlessly. In
          this guide, we&apos;ll walk through creating a simple &quot;Hello
          World&quot; application.
        </p>
      </section>
      <section>
        <h2>Setting Up Your Project</h2>
        <p>
          First, you need to set up a new Next.js project. Follow these steps:
        </p>
        {/* prettier-ignore */}
        <pre className="whitespace-pre"><code>{`npx create-next-app hello-world
cd hello-world
npm run dev
`}</code></pre>
        <p>
          This will create a new Next.js project named <code>hello-world</code>{" "}
          and start the development server.
        </p>
      </section>
      <section>
        <h2>Creating the Hello World Page</h2>
        <p>Next, create a simple page to display &quot;Hello World&quot;.</p>
        <p>
          In the <code>/pages</code> directory, open <code>index.js</code> and
          replace its contents with the following code:
        </p>
        {/* prettier-ignore */}
        <pre className="whitespace-pre"><code>{`import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to your first Next.js application!</p>
    </div>
  );
};

export default Home;
`}</code></pre>
        <p>
          This code defines a simple functional component that renders
          &quot;Hello World&quot; on the homepage.
        </p>
      </section>
      <section>
        <h2>Running Your Application</h2>
        <p>
          To see your &quot;Hello World&quot; application in action, make sure
          your development server is running:
        </p>
        {/* prettier-ignore */}
        <pre className="whitespace-pre"><code>{`npm run dev
      `}</code></pre>
        <p>
          Open your browser and navigate to <code>http://localhost:3000</code>.
          You should see your &quot;Hello World&quot; message.
        </p>
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
          You have successfully created a simple &quot;Hello World&quot;
          application using Next.js. This basic setup forms the foundation for
          building more complex applications with Next.js.
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
