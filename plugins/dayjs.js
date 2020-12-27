import dayjs from "dayjs"
import Vue from 'vue'

Vue.filter('date', (value, format = 'YYYY-MM-DD') => {
    return dayjs(value).format(format);
})
