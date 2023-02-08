import React from 'react';

function CleaningService() {
  return (
      <div>
        <header>
          <h1>Cleaning Service</h1>
          <nav>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contatct">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="services">
            <h2>Our Services</h2>
            <p>We offer the following cleaning services:</p>
            <ul>
              <li>House cleaning</li>
              <li>Office cleaning</li>
              <li>Post-construction cleaning</li>
              <li>Carpet cleaning</li>
            </ul>
          </section>
          <section id="about">
            <h2>About Us</h2>
            <p>We are a local cleaning service company dedicated to providing high-quality cleaning services at affordable prices. Our team of experienced cleaners is available to work flexible hours to fit your schedule.</p>
          </section>
          <section id="contact">
            <h2>Contact Us</h2>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message"></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        </main>
        <footer>
          <p>Copyright © 2023 Cleaning Service</p>
        </footer>
      </div>
  );
}

export default CleaningService;
