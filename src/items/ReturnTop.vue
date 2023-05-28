<template>
    <div ref="button" class="button_return hide">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-up-fill"
            viewBox="0 0 16 16">
            <path
                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
    </div>
</template>

<script>
export default {
    mounted() {
        const { button } = this.$refs;
        window.addEventListener("scroll", () => {
            if (window.scrollY < 20) {
                button.classList.add("hide");
                button.classList.remove("show");
            } else {
                button.classList.add("show");
                button.classList.remove("hide");
            }
            let timer = null;
            window.addEventListener('scroll', function () {
                if (timer !== null) {
                    clearTimeout(timer);
                    button.style.backgroundColor = "rgba(0, 0, 0, .7)";
                }
                timer = setTimeout(function () {
                    button.style.backgroundColor = "rgba(0, 0, 0, .2)";
                }, 2000);
            }, false);
        })
    }
}
</script>

<style lang="scss" scoped>
.button_return {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, .2);
    margin: 0;
    border-radius: 5px;
    transition: all .15s linear;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, .35) !important;
    }

    &:active {
        background-color: rgba(0, 0, 0, .35) !important;
    }
}

.show {
    opacity: 1 !important;
}

.hide {
    opacity: 0 !important;
}
</style>