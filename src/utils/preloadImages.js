const cacheImage = async (srcArray) => {
  const promises = await srcArray?.map((src) => {
    console.log('1');
    return Promise(function (resolve, reject) {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });

  await Promise.all(promises);

  console.log("image loaded!");
};

export default cacheImage;
