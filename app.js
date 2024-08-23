const fetchBtn = document.querySelector("#btn");
const tbody = document.querySelector("#table");

const Display = (data) => {
  tbody.innerHTML = data
    .map((el) => {
      return `
        <tr>
            <td>${el.title}</td>
            <td>${el.category}</td>
            <td>${el.price}</td>
        </tr>`;
    })
    .join(" ");
};

const handleFetchBtn = () => {
  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((data) => Display(data));
};

fetchBtn.addEventListener("click", handleFetchBtn);
