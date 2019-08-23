export const Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
export const QrCode = /^\d{16}$/

export const checkRegex = (regex, value) => regex.test(value);