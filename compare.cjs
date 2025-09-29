function compare(a, b)
{
  const length = Math.max(a.length, b.length);
  for (let i = 0; i < length; ++i) {
    const ca = i < a.length ? a.charCodeAt(i) : 0;
    const cb = i < b.length ? b.charCodeAt(i) : 0;

    if (ca !== cb)
      return ca - cb;
  }

  return 0;
}

module.exports = compare;