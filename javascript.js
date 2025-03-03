document.addEventListener("DOMContentLoaded", function () {
    const pageChange = document.getElementById("page-change");
  
    pageChange.addEventListener("click", function () {
      window.location.href = "index2.html";
    });
  });
document.addEventListener("DOMContentLoaded", function () {
    const pageBack = document.getElementById("desk-back");
  
    pageBack.addEventListener("click", function () {
      window.location.href = "index.html"; 
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const changeBg = document.getElementById("bg-change");
  
    changeBg.addEventListener("click", function () {
      document.body.style.backgroundColor = getRandomColor();
    });
  
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  


document.addEventListener("DOMContentLoaded", function () {
    const substrctElement = document.getElementById("substrct");
    const addElement = document.getElementById("add");
    const clearHistoryButton = document.getElementById("btn-clear");

    function handleButton(id) {
        alert("Board Updated Successfully");

        const minusValue = parseInt(substrctElement.textContent);
        const addValue = parseInt(addElement.textContent);

        if (minusValue > 0) {
            substrctElement.textContent = minusValue - 1;
            addElement.textContent = addValue + 1;
        }

        const button = document.getElementById(id);
        button.disabled = true;
        button.classList.add("bg-gray-400");
        button.classList.remove("bg-[#3752FD]");

        const taskElement = button.closest('[class*="bg-"][class*="F4F7FF"]');
        const taskTitle = taskElement.querySelector('h1.font-bold').textContent;

        console.log("Task title: " + taskTitle);
        
        const todayDate = new Date();
        const formattedDate = todayDate.toLocaleString();

        const activityLog = document.querySelector('.activity-log');
        const activityEntry = document.createElement('p');
        activityEntry.textContent = `You have completed the task "${taskTitle}" at ${formattedDate}`;
        activityLog.appendChild(activityEntry);
    }

    const buttons = [
        { id: "btn-complete", name: "btn-complete" },
        { id: "btn-dark", name: "btn-dark" },
        { id: "btn-home", name: "btn-home" },
        { id: "btn-emoji", name: "btn-emoji" },
        { id: "btn-API", name: "btn-API" },
        { id: "btn-job", name: "btn-job" }
    ];

    buttons.forEach(({ id }) => {
        const button = document.getElementById(id);
        button.addEventListener("click", function () {
            handleButton(id);
        });
    });

    clearHistoryButton.addEventListener("click", function () {
        const activityLog = document.querySelector('.activity-log');
        activityLog.innerHTML = "";
        
    });

    const dateElement = document.getElementById("today-date");
    const today = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    dateElement.innerHTML = today.toLocaleDateString('en-US', options).replace(",", "<br>");
});
