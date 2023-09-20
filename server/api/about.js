export default defineEventHandler(async (event) => {

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_5Xw7AWK8k7FDtKJGWK8oQHvhlMqKaPUjxLEDO6Pb')
    return data;
})