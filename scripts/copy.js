 document.addEventListener("click", async (event) => {
      const button = event.target.closest(".copy-btn");
      if (!button) return;

      const valueElement = button.parentElement.querySelector("[data-copy]");
      if (!valueElement) return;

      const text = valueElement.textContent.trim();

      try {
        await navigator.clipboard.writeText(text);

        button.textContent = "Copiado";
        button.classList.add("copied");

        valueElement.classList.add("copied");

        setTimeout(() => {
          button.textContent = "Copiar";
          button.classList.remove("copied");
          valueElement.classList.remove("copied");
        }, 600);
      } catch (error) {
        console.error("Error al copiar al portapapeles", error);
      }
    });