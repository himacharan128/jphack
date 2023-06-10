import React from "react";

export default function Header() {
  return (
    <div>
      <header class="border-bottom">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Application Form
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Intern
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Alumni
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </header>
    </div>
  );
}
