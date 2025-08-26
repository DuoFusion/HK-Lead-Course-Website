export const generateOptions = (data?: { _id: string; name?: string; firstName?: string; lastName?: string; title?: string }[]) => {
  if (!data || !Array.isArray(data)) return [];

  return data.map((item) => {
    const label = item.name?.trim() || [item.firstName, item.lastName].filter(Boolean).join(" ") || item.title?.trim() || "Unnamed";

    return {
      value: item._id,
      label,
    };
  });
};
