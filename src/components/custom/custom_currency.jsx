const CustomCurrency = ({number}) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, // Menghilangkan angka di belakang koma
        maximumFractionDigits: 0, // Menghilangkan angka di belakang koma
    }).format(number ?? 0);
};

export default CustomCurrency