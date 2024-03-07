<script setup lang="ts">
import { MenuType } from '@/Enums'
import type { Menu } from '@/Types'
defineProps<{ menu: Menu }>()
</script>
<template>
    <template v-if="menu.type === MenuType.MEAL">
        <div class="row">
            <div
                class="col-6"
                v-for="({ items: parentMenus, type }, index) in menu.items"
                :key="index"
            >
                <div
                    v-for="({ name, price, items }, index) in parentMenus"
                    :key="index"
                    class="submenu__container"
                >
                    <div class="menu-head">
                        <h4 class="menu-title">
                            {{ name }}{{ price && ` £${price}`
                            }}{{ type === MenuType.VEGETARIAN ? ' (V)' : '' }}
                        </h4>
                    </div>
                    <div class="list-container">
                        <div v-for="(item, index) in items" :key="index" class="list-item">
                            <div class="item-head">
                                <h5>
                                    {{ item.name.en }} /
                                    <span class="name-vi">{{ item.name.vi }}</span>
                                </h5>
                                <p>
                                    <b>{{ item.price }}</b>
                                </p>
                            </div>
                            <div
                                v-for="(option, index) in item.options"
                                :key="index"
                                class="item-options"
                            >
                                <p>{{ option.name }}</p>
                                <p>
                                    <b>
                                        {{ option.price }}
                                    </b>
                                </p>
                            </div>
                            <p>{{ item.subInfo }}</p>
                            <span>{{ item.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="row">
            <div class="col-12">
                <div class="menu-drink">
                    <h5 class="drink-type">
                        Glass
                        <i class="txt-normal"> 175ml </i>
                    </h5>
                    <h5 class="drink-type">
                        Carafe
                        <i class="txt-normal"> 500ml </i>
                    </h5>
                    <h5 class="drink-type">
                        Bottle
                        <i class="txt-normal"> 750ml </i>
                    </h5>
                </div>
                <div v-for="(items, index) in menu.items" :key="index" class="submenu__container">
                    <div class="menu-head">
                        <h4 class="menu-title">
                            {{ items.name }}{{ items.price && ` £${items.price}` }}
                        </h4>
                    </div>
                    <div class="list-container">
                        <div v-for="(item, index) in items.items" :key="index" class="list-item">
                            <div class="item-head">
                                <h5>
                                    {{ item.name }}
                                </h5>
                                <div class="menu-drink">
                                    <!-- <b>{{ item.price }}</b> -->
                                    <p
                                        class="drink-type"
                                        v-for="(val, index) in Object.values(item.price)"
                                        :key="index"
                                    >
                                        <b>
                                            {{ val }}
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <span>{{ item.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>
<style scoped lang="scss">
.row * {
    font-family: var(--font-body);
    cursor: pointer;
}
h5,
p {
    margin-block: 0;
}
.submenu__container:not(:last-of-type) {
    margin-bottom: 3rem;
}
.name-vi {
    font-size: 16px;
    font-weight: 400;
}
.list-item {
    margin-top: 1.5rem;
}
.item-head,
.item-options {
    display: flex;
    justify-content: space-between;
}
.menu-head {
    border-bottom: 1px solid var(--color-gold);
    .menu-title {
        background-color: var(--color-gold);
        width: fit-content;
        margin-bottom: 0.5rem;
    }
}

.list-container:hover .list-item {
    opacity: 0.3;
}
.list-container .list-item:hover {
    opacity: 1;
}
table {
    width: 100%;
}
.menu-drink {
    display: flex;
    justify-content: end;
    .drink-type {
        text-align: center;
        width: 50px;
        i {
            font-size: 14px;
        }
        &:not(:last-of-type) {
            margin-right: 10px;
        }
    }
}
</style>
