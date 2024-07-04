export const TableOfContents = () => {
  return (
    <div>
      <h2>Table of Contents</h2>
      <ol>
        <li>
          <a href="#about">
            <h3>About</h3>
          </a>
        </li>
        <ol type="a">
          <li>
            <a href="#branding">
              <h4>Branding</h4>
            </a>
          </li>
          <li>
            <a href="#priorities">
              <h4>Priorities</h4>
            </a>
          </li>
        </ol>
        <li>
          <a href="#frontend">
            <h3>Frontend</h3>
          </a>
        </li>
        <ol type="a">
          <li>
            <a href="#pages">
              <h4>Pages</h4>
            </a>
          </li>
          <ol type="i">
            <li>
              <a href="#main">
                <h5>Main</h5>
              </a>
            </li>
            <li>
              <a href="#login">
                <h5>Login</h5>
              </a>
            </li>
            <li>
              <a href="#friends">
                <h5>Friends</h5>
              </a>
            </li>
            <li>
              <a href="#events">
                <h5>Events</h5>
              </a>
            </li>
            <li>
              <a href="#profile">
                <h5>Profile</h5>
              </a>
            </li>
          </ol>
        </ol>
        <li>
          <a href="#backend">
            <h3>Backend</h3>
          </a>
          <ol type="a">
            <li>
              <a href="#endpoints">
                <h4>Endpoints</h4>
              </a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#backofmind">
            <h3>Things to keep in back of mind</h3>
          </a>
          <ol type="a">
            <li>
              <a href="#business">
                <h4>Business</h4>
              </a>
            </li>
            <li>
              <a href="#chat">
                <h4>Chat</h4>
              </a>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};
