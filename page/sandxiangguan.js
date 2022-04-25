/* Vue.component('sandxiangguan',{
    data:function(){
        return {count:0}
    },
    template:
        `
        <div class='cont'>
        <DT><H3 ADD_DATE="1641866476" LAST_MODIFIED="1641866476">3D相关</H3>
        <DL><p>
            <DT><A HREF="https://polyhaven.com/" ADD_DATE="1640253608" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACX0lEQVQ4jYWST0jTYRzGn/f3W5u6jWB5WFFWloUTkygq6GBRhw5igSgJFutQQWFQEN7CU6ewjMJT5SEINiQQ0cJCJKS0JhhIJWpppjHWZttvbu/v/fPtIIq6rOf48Dwf3u/3+zKso6uDM5t+ZO1gXAhkoduHTpb++luOrTWaR0ednxLuEwkhb2SUrpQgQOn+kgnR0tRX/roszOy/AmpDZLq2TVXEuWxMK10jNHkBoCAlEZg0cXjGl/KTr8NgZuuxexhhYLQKUP9htjCaTD/IKl1LgEFaWWTbXWcGvdif8Fc5zTwPMYCIpjMi2VDV5nsDAMYS4NnBLbGMYNc0WJMWvFOlUudiX2eDNb+LgxvMggZm0NBikrZqos3r7Q5oJmP3/W7XWnvglrzQd11Rb6NQzy9G65Z8Ry6A6XGAr7W1aUqhOQzzMzz5kWU/BxCikOn68qKgeu9jizHQku90vHN5PSPwO3vA+ffl/Kozdk5cKuLZ7OWsTB3VUE8sR7LjymgA6bmZGpXJ3GTCKiMt9TxX9dtvD4dWvaCrvetAcvrVI+mb26eJmOI4UjznPpucGgPjC8eZVi4CYCtjjNt6KmcE77fKXWpsZ3my5CUc/gER+Jly7YhmTjG++G+kplhW6acLln645+7weA7AaXiwcaEUzkgRmZ7CtoC71a/JUa2JwCX1WLZuiUwWv60Lh9XKsVcsUQGMwWnkG1ai6r0773wozg6dtmyFeS66K+58TAMRrFXOFQhEYIpYM2xgKJzTWA+gCEySiHPJQ1Ly/v8VcwC2tMbTXAR5LNpbFy6z/1VaqT+J7zXgSopFxQAAAABJRU5ErkJggg==">Poly Haven</A>
        </DL><p>
        </div>
        `
}) */

var a2 =        `
<div class='cont'>
<DT><H3 ADD_DATE="1641866476" LAST_MODIFIED="1641866476">3D相关</H3>
<DL><p>
    <DT><A HREF="https://polyhaven.com/" ADD_DATE="1640253608" ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACX0lEQVQ4jYWST0jTYRzGn/f3W5u6jWB5WFFWloUTkygq6GBRhw5igSgJFutQQWFQEN7CU6ewjMJT5SEINiQQ0cJCJKS0JhhIJWpppjHWZttvbu/v/fPtIIq6rOf48Dwf3u/3+zKso6uDM5t+ZO1gXAhkoduHTpb++luOrTWaR0ednxLuEwkhb2SUrpQgQOn+kgnR0tRX/roszOy/AmpDZLq2TVXEuWxMK10jNHkBoCAlEZg0cXjGl/KTr8NgZuuxexhhYLQKUP9htjCaTD/IKl1LgEFaWWTbXWcGvdif8Fc5zTwPMYCIpjMi2VDV5nsDAMYS4NnBLbGMYNc0WJMWvFOlUudiX2eDNb+LgxvMggZm0NBikrZqos3r7Q5oJmP3/W7XWnvglrzQd11Rb6NQzy9G65Z8Ry6A6XGAr7W1aUqhOQzzMzz5kWU/BxCikOn68qKgeu9jizHQku90vHN5PSPwO3vA+ffl/Kozdk5cKuLZ7OWsTB3VUE8sR7LjymgA6bmZGpXJ3GTCKiMt9TxX9dtvD4dWvaCrvetAcvrVI+mb26eJmOI4UjznPpucGgPjC8eZVi4CYCtjjNt6KmcE77fKXWpsZ3my5CUc/gER+Jly7YhmTjG++G+kplhW6acLln645+7weA7AaXiwcaEUzkgRmZ7CtoC71a/JUa2JwCX1WLZuiUwWv60Lh9XKsVcsUQGMwWnkG1ai6r0773wozg6dtmyFeS66K+58TAMRrFXOFQhEYIpYM2xgKJzTWA+gCEySiHPJQ1Ly/v8VcwC2tMbTXAR5LNpbFy6z/1VaqT+J7zXgSopFxQAAAABJRU5ErkJggg==">Poly Haven</A>
</DL><p>
</div>
`

var tiao2 = /<A.+>/g

var input2 = a2.match(tiao2)
console.log(input2)

Vue.component('sandxiangguan',{
    data:function(){
        return {input2}
    },
    template:
        `
        <div>
            <h2>3D动画</h2>
            <div class='a-link' v-for='item in input2' v-html='item'></div>
        </div>

        `,
})
