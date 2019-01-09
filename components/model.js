import Task from "data.task";

// resolveImage :: String -> Task(Error, Image)
export const resolveImage = data => {
  return new Task(
    (reject, resolve) =>
      resolve({
        ...data
        //@TODO: Consider consolidating data.uri with dimensions to a image object
      }),
    err => reject(err)
  );
};
