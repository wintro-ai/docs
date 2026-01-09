(function() {
  'use strict';

  // Configuration
  const PROTECTED_PATH = '/onboarding';
  const STORAGE_KEY = 'docs_access_granted';
  const VALID_PASSWORDS = ['secret2025'];

  // Check if current page needs protection
  if (!window.location.pathname.startsWith(PROTECTED_PATH)) {
    return;
  }

  // Check if access already granted
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    return;
  }

  // Inject styles for blur and modal
  const style = document.createElement('style');
  style.id = 'simple-gate-styles';
  style.textContent = `
    body.gate-locked {
      overflow: hidden;
    }
    body.gate-locked > *:not(#simple-gate-modal) {
      filter: blur(15px);
      pointer-events: none;
      user-select: none;
    }
    #simple-gate-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    #simple-gate-box {
      background: linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%);
      border-radius: 16px;
      padding: 3rem;
      max-width: 420px;
      width: 90%;
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    #simple-gate-icon {
      width: 56px;
      height: 56px;
      margin: 0 auto 1.5rem;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
    }
    #simple-gate-icon svg {
      width: 28px;
      height: 28px;
      color: #ffffff;
    }
    #simple-gate-box h2 {
      color: #ffffff;
      margin: 0 0 0.5rem 0;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    #simple-gate-box .subtitle {
      color: #6366f1;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.75rem;
    }
    #simple-gate-box p {
      color: #9ca3af;
      margin: 0 0 2rem 0;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    #simple-gate-label {
      display: block;
      text-align: left;
      color: #d1d5db;
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      letter-spacing: 0.025em;
    }
    #simple-gate-input {
      width: 100%;
      padding: 1rem 1.25rem;
      font-size: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.3);
      color: #ffffff;
      outline: none;
      transition: all 0.2s ease;
      box-sizing: border-box;
      letter-spacing: 0.1em;
    }
    #simple-gate-input::placeholder {
      color: #6b7280;
      letter-spacing: normal;
    }
    #simple-gate-input:focus {
      border-color: rgba(99, 102, 241, 0.5);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }
    #simple-gate-input.error {
      border-color: #ef4444;
      animation: shake 0.4s ease-in-out;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-8px); }
      75% { transform: translateX(8px); }
    }
    #simple-gate-btn {
      width: 100%;
      padding: 1rem 1.25rem;
      font-size: 0.95rem;
      font-weight: 600;
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: #ffffff;
      cursor: pointer;
      margin-top: 1rem;
      transition: all 0.2s ease;
      letter-spacing: 0.025em;
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
    }
    #simple-gate-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }
    #simple-gate-btn:active {
      transform: translateY(0);
    }
    #simple-gate-error {
      color: #f87171;
      font-size: 0.85rem;
      margin-top: 1rem;
      min-height: 1.25rem;
    }
    #simple-gate-footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      color: #6b7280;
      font-size: 0.8rem;
    }
  `;
  document.head.appendChild(style);

  // Add locked class to body
  document.body.classList.add('gate-locked');

  // Create modal HTML
  const modal = document.createElement('div');
  modal.id = 'simple-gate-modal';
  modal.innerHTML = `
    <div id="simple-gate-box">
      <div id="simple-gate-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <div class="subtitle">Client Portal</div>
      <h2>Exclusive Access</h2>
      <p>This content is reserved for authorized clients. Please enter the access code provided by your account manager.</p>
      <label id="simple-gate-label">Client Access Code</label>
      <input type="password" id="simple-gate-input" placeholder="Enter your access code" autocomplete="off" />
      <button id="simple-gate-btn">Verify & Continue</button>
      <div id="simple-gate-error"></div>
      <div id="simple-gate-footer">Need access? Contact your account manager.</div>
    </div>
  `;
  document.body.appendChild(modal);

  // Get elements
  const input = document.getElementById('simple-gate-input');
  const btn = document.getElementById('simple-gate-btn');
  const errorMsg = document.getElementById('simple-gate-error');

  // Focus input
  input.focus();

  // Validate password
  function validatePassword() {
    const password = input.value.trim();

    if (VALID_PASSWORDS.includes(password)) {
      // Success - grant access
      localStorage.setItem(STORAGE_KEY, 'true');
      document.body.classList.remove('gate-locked');
      modal.remove();
      style.remove();
    } else {
      // Failure - show error
      input.classList.add('error');
      errorMsg.textContent = 'Invalid access code. Please verify and try again.';
      input.value = '';
      input.focus();

      setTimeout(function() {
        input.classList.remove('error');
      }, 400);
    }
  }

  // Event listeners
  btn.addEventListener('click', validatePassword);
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      validatePassword();
    }
  });

  // Clear error on input
  input.addEventListener('input', function() {
    errorMsg.textContent = '';
  });
})();
