export const EditItemPage = () => {
  return (
    <div >
      <h1>Редактирование товара</h1>
      <form id="edit-product-form">
        <label for="product-name">Название товара:</label>
        <input type="text" id="product-name" name="product-name" required />

        <label for="product-description">Описание:</label>
        <textarea id="product-description" name="product-description" required></textarea>

        <label for="product-price">Цена (руб):</label>
        <input type="number" id="product-price" name="product-price" required />

        <label for="product-category">Категория:</label>
        <select id="product-category" name="product-category" required>
            <option value="">Выберите категорию</option>
            <option value="Бытовая техника">Бытовая техника</option>
            <option value="Электроника">Электроника</option>
            <option value="Мобильные устройства">Мобильные устройства</option>
        </select>

        <label for="product-stock">Количество на складе:</label>
        <input type="number" id="product-stock" name="product-stock" required />

        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
}