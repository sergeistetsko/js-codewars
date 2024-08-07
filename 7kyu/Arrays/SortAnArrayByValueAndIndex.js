function sortByValueAndIndex(array)
{
return array
        .map((value, index) => ({ value, product: value * (index + 1) }))
        .sort((a, b) => a.product - b.product)
        .map(item => item.value);
}