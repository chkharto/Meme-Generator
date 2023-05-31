import React from "react";
import './style.css';
import Home from "./pages/home";

export default function App() {
  return (
    <div>
      <Home />
      <form name="contact" method="POST" data-netlify="true"  netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
    </form>
    </div>
  );
}
