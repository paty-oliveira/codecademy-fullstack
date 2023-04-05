exports.fieldValidator = (fields) => {
  const { title, price, category, essential, created_at } = fields;
  if (!title || !price || !category || !essential || !created_at) {
    const emptyFields = [];
    Object.keys(fields).forEach((field) => {
      if (fields[field].length <= 0) {
        emptyFields.push(field);
      }
    });
    return {
      error: 'All fields are required',
      emptyFields,
    };
  }
  return null;
};
