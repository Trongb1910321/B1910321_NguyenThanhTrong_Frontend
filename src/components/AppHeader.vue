<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Danh bạ
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
            <div class="nav-item">
                <button class="m-2 btn btn-sm btn-primary" @click="login">
                    <i class="fa-solid fa-right-to-bracket"></i> Đăng nhập
                </button>
                <button class="m-2 btn btn-sm btn-success" @click="register">
                    <i class="fa-solid fa-registered"></i> Đăng ký
                </button>
            </div>
            
        </div>
    </nav>
    
</template>

<script>
import ContactService from "@/services/contact.service";

export default {
  
    methods: {
        async retrieveContacts() {
            try {
                this.contacts = await ContactService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        register() {
            this.$router.push({ name: "register" });
        },
        
        login() {
            this.$router.push({ name: "login" });
        },
    },

    mounted() {
        this.refreshList();
    },
};
</script>