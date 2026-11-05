
// =====================================
// 1. DỮ LIỆU MÓN ĂN
// =====================================

const foods = [

    {
        id: 1,
        name: "Tôm hùm nướng phô mai",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=700",
        description: "Tôm hùm tươi nướng cùng lớp phô mai béo ngậy.",
        ingredients: "Tôm hùm, phô mai, bơ, tỏi và gia vị.",
        feature: "Thịt tôm chắc, vị ngọt tự nhiên."
    },

    {
        id: 2,
        name: "Hàu nướng mỡ hành",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=700",
        description: "Hàu nướng nóng hổi với mỡ hành thơm ngon.",
        ingredients: "Hàu, hành lá, dầu ăn và đậu phộng.",
        feature: "Béo ngậy, thơm mùi hành."
    },

    {
        id: 3,
        name: "Tôm hấp sả",
        category: "seafood",
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=700",
        description: "Tôm hấp cùng sả, giữ vị ngọt tự nhiên.",
        ingredients: "Tôm tươi, sả, gừng và gia vị.",
        feature: "Thơm nhẹ, thịt tôm săn chắc."
    },

    {
        id: 4,
        name: "Sushi Nhật Bản",
        category: "sushi",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=700",
        description: "Sushi phong cách Nhật Bản, trình bày đẹp mắt.",
        ingredients: "Cơm sushi, rong biển, cá và rau củ.",
        feature: "Hương vị hài hòa."
    },

    {
        id: 5,
        name: "Sashimi cá hồi",
        category: "sushi",
        image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=700",
        description: "Cá hồi thái lát dùng kèm gia vị Nhật Bản.",
        ingredients: "Cá hồi, wasabi, gừng và nước tương.",
        feature: "Thịt cá mềm, béo."
    },

    {
        id: 6,
        name: "Lẩu hải sản",
        category: "hotpot",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700",
        description: "Nước lẩu đậm đà kết hợp hải sản.",
        ingredients: "Tôm, mực, ngao, rau xanh và nước dùng.",
        feature: "Nước dùng nóng hổi, vị ngọt tự nhiên."
    },

    {
        id: 7,
        name: "Lẩu nấm",
        category: "hotpot",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
        description: "Lẩu nấm thanh ngọt và hấp dẫn.",
        ingredients: "Nấm kim châm, nấm hương và rau xanh.",
        feature: "Vị thanh nhẹ."
    },

    {
        id: 8,
        name: "Nem rán Việt Nam",
        category: "vietnamese",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700",
        description: "Món nem rán vàng giòn quen thuộc.",
        ingredients: "Thịt heo, miến, mộc nhĩ và bánh đa nem.",
        feature: "Vỏ giòn, nhân đậm đà."
    },

    {
        id: 9,
        name: "Trái cây tươi",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=700",
        description: "Các loại trái cây tươi theo mùa.",
        ingredients: "Dưa hấu, cam, nho, táo.",
        feature: "Tươi mát, nhiều màu sắc."
    },

    {
        id: 10,
        name: "Bánh kem",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700",
        description: "Bánh kem mềm mịn và thơm ngon.",
        ingredients: "Bột mì, trứng, sữa và kem tươi.",
        feature: "Vị ngọt dịu."
    },

    {
        id: 11,
        name: "Khoai tây chiên",
        category: "fried",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700",
        description: "Khoai tây chiên vàng giòn.",
        ingredients: "Khoai tây, dầu ăn và muối.",
        feature: "Bên ngoài giòn, bên trong mềm."
    },

    {
        id: 12,
        name: "Bít tết bò",
        category: "steak",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700",
        description: "Thịt bò áp chảo thơm ngon.",
        ingredients: "Thịt bò, bơ, tỏi, tiêu và sốt.",
        feature: "Thịt mềm, đậm vị."
    }

];


// =====================================
// 2. TÊN DANH MỤC
// =====================================

const categoryNames = {
    seafood: "Hải sản",
    sushi: "Sushi",
    hotpot: "Món lẩu",
    vietnamese: "Món Việt",
    dessert: "Tráng miệng",
    fried: "Đồ chiên",
    steak: "Bít tết"
};


// =====================================
// 3. KHAI BÁO PHẦN TỬ
// =====================================

const foodList = document.getElementById("foodList");
const search = document.getElementById("search");
const modal = document.getElementById("foodModal");

let currentCategory = "all";


// =====================================
// 4. HIỂN THỊ MÓN ĂN
// =====================================

function displayFoods(items) {

    foodList.innerHTML = "";

    if (items.length === 0) {
        foodList.innerHTML = `
            <p class="loading">
                Không tìm thấy món ăn phù hợp!
            </p>
        `;
        return;
    }

    items.forEach(food => {

        const card = document.createElement("article");

        card.className = "food-card";

        card.innerHTML = `

            <img
                src="${food.image}"
                alt="${food.name}"
                loading="lazy"
                onerror="this.src='https://placehold.co/700x450/790d16/ffffff?text=Poseidon+Buffet'"
            >

            <div class="food-info">

                <h3>${food.name}</h3>

                <p>${food.description}</p>

                <button
                    class="detail-btn"
                    data-id="${food.id}"
                >
                    Xem chi tiết
                </button>

            </div>

        `;

        foodList.appendChild(card);

    });

}


// =====================================
// 5. TÌM KIẾM VÀ LỌC MÓN ĂN
// =====================================

function applyFilters() {

    const keyword = search.value
        .trim()
        .toLocaleLowerCase("vi");

    const filtered = foods.filter(food => {

        const correctCategory =
            currentCategory === "all" ||
            food.category === currentCategory;

        const searchable = [
            food.name,
            food.description,
            categoryNames[food.category] || ""
        ].join(" ").toLocaleLowerCase("vi");

        return correctCategory &&
            searchable.includes(keyword);

    });

    displayFoods(filtered);

}


// =====================================
// 6. SỰ KIỆN DANH MỤC
// =====================================

document.getElementById("categories")
    .addEventListener("click", function(event) {

        const button = event.target.closest(
            "button[data-category]"
        );

        if (!button) return;

        currentCategory = button.dataset.category;

        document.querySelectorAll(
            ".categories button"
        ).forEach(item => {

            item.classList.toggle(
                "active",
                item === button
            );

        });

        applyFilters();

    });


// =====================================
// 7. TÌM KIẾM
// =====================================

search.addEventListener("input", applyFilters);


// =====================================
// 8. XEM CHI TIẾT MÓN ĂN
// =====================================

function showDetail(id) {

    const food = foods.find(item => item.id === id);

    if (!food) return;

    document.getElementById("detailImage").src =
        food.image;

    document.getElementById("detailName").textContent =
        food.name;

    document.getElementById("detailDescription").textContent =
        food.description;

    document.getElementById("detailIngredients").textContent =
        food.ingredients;

    document.getElementById("detailFeature").textContent =
        food.feature;

    modal.classList.add("show");

    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


// =====================================
// 9. SỰ KIỆN NÚT CHI TIẾT
// =====================================

foodList.addEventListener("click", function(event) {

    const button = event.target.closest(".detail-btn");

    if (!button) return;

    showDetail(Number(button.dataset.id));

});


// =====================================
// 10. ĐÓNG POPUP
// =====================================

function closeDetail() {

    modal.classList.remove("show");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


// Nút X

document.getElementById("closeModal")
    .addEventListener("click", closeDetail);


// Nút đóng chi tiết

document.getElementById("closeDetail")
    .addEventListener("click", closeDetail);


// Nhấn bên ngoài popup

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeDetail();
    }

});


// Nhấn ESC

document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        modal.classList.contains("show")
    ) {
        closeDetail();
    }

});


// =====================================
// 11. KHỞI ĐỘNG WEBSITE
// =====================================

displayFoods(foods);

console.log("POSEIDON SEAFOOD BUFFET READY!");
