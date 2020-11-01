import Api from '@/services/Api'

export default {
    fetchOrders () {
        return Api().get('orders')
    },

    addOrder (params) {
        return Api().post('orders', params)
    },

    updateOrder (params) {
        return Api().put('orders/' + params.id, params)
    },

    getOrder (params) {
        return Api().get('order/' + params.id)
    },

    deleteOrder (id) {
        return Api().delete('orders/' + id)
    }
}