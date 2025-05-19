import 'normalize.css';
const form = document.querySelector(".feedback-form")
const textarea = document.querySelector("textarea")
const storageKey = "feedback-form-state"

const savedData = localStorage.getItem(storageKey);
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  form.elements.email.value = email || "";
  form.elements.message.value = message || "";
}

form.addEventListener("input", () => {
  const data = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim()
  };
  localStorage.setItem(storageKey, JSON.stringify(data));
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const data = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim()
  };

  if (!data.email || !data.message) {
    alert("To submit the form both fields are required");
    return;
  }

  console.log(data);

  form.reset();
  localStorage.removeItem(storageKey);
});