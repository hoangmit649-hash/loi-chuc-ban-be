
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Thay các giá trị bên dưới bằng mã Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyAH1GudlHh_dh5UIPQ0kGuksC5PLVvZkIE",
    authDomain: "hoangmits-loichuc.firebaseapp.com",
    projectId: "hoangmits-loichuc",
    storageBucket: "hoangmits-loichuc.firebasestorage.app",
    messagingSenderId: "349847103608",
    appId: "1:349847103608:web:f07e31b152480c8a7ee58d"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Kết nối cơ sở dữ liệu
const db = getFirestore(app);

// Hàm gửi lời chúc
async function guiLoiChuc(ten, loiChuc) {
    if (!ten.trim() || !loiChuc.trim()) {
        throw new Error("Vui lòng nhập tên và lời chúc!");
    }

    await addDoc(collection(db, "loi_chuc"), {
        ten: ten.trim(),
        loiChuc: loiChuc.trim(),
        thoiGian: serverTimestamp()
    });
}

export { db, guiLoiChuc };
