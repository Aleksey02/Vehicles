<template>
    <aside class="aside">
        <h2 class="aside__title">Demo Test</h2>
        <ul class="aside__list">
            <li class="aside__item">
                <img src="../assets/aside/user.svg" alt="profile icon">
                <span>Profile</span>
            </li>
            <li class="aside__item active">
                <img src="../assets/aside/rim.svg" alt="circle icon">
                <span>Vechicles</span>
            </li>
            <li class="aside__item">
                <img src="../assets/aside/settings.svg" alt="settings icon">
                <span>Setting</span>
            </li>
        </ul>
    </aside>
</template>


<script setup lang="ts">

</script>


<style scoped lang="scss">
@import '../variables.scss';
.aside {
    width: 256px;
    flex-shrink: 0;
    background-color: $primaryDark;
    background-image: url('../assets/aside/bg.png');
    background-repeat: no-repeat;
    background-position: bottom;
    padding-top: 30px;

    &__title {
        color: $textWhite;
        font-size: 24px;
        font-weight: 700;
        line-height: 24px;
        padding-left: 56px;
        margin-bottom: 100px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 12px 30px;
        color: $textWhite45;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        cursor: pointer;

        &.active {
            background: $textWhite20;
            color: $textWhite;
            border-left: 2px solid $primaryRed;
        }
    }
}
</style>
