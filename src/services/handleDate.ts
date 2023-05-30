export const handleDate = (prmt: string | Date) => {
  return new Date(prmt).toLocaleDateString();
};
