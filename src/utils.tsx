import { IDatas, ILesson, ILessons } from "./interface/interface";

/**
 * It returns the current date in the format of "MM/DD/YYYY"
 * @returns A string.
 */
export const setCurrentDate = (): string => {
  return new Date().toLocaleDateString();
};

/**
 * It takes an array of lessons and returns an object with the average score and the number of
 * evaluations.
 * @param lessons - Array<ILesson>
 * @returns An object with two properties: totalScore and totlalEval.
 */
export function getAverageNote(lessons: Array<ILesson>) {
  let totalScore = 0;
  let totlalEval = 0;

  if (lessons)
    lessons.forEach((lesson: ILesson) => {
      if (lesson.name === "Evaluation Test" && lesson.time > 0) {
        totalScore += lesson.score / 5;
        totlalEval += 1;
      }
    });

  return { totalScore: totalScore, totlalEval: totlalEval };
}

/**
 * Given a number of milliseconds, return a dictionary with the number of days, hours, and minutes that
 * have elapsed
 * @param {number} milliseconds - number
 * @returns An object with the following properties:
 */
export function timeConversion(milliseconds: number) {
  const days = Math.floor(milliseconds / 86400000);
  milliseconds -= days * (86400 * 1000);
  const hours = Math.floor(milliseconds / (60 * 60 * 1000));
  milliseconds -= hours * (60 * 60 * 1000);
  const minutes = Math.floor(milliseconds / (60 * 1000));

  return {
    days: days,
    hours: hours,
    minutes: minutes,
  };
}

/**
 * It takes the chapters and lessons from the datas object and creates a new array of chapters with the
 * lessons inside
 * @param {IDatas} datas - the data that you want to display in the table of contents.
 * @returns An array of chapters with an array of lessons.
 */
export const tableOfContents = (datas: IDatas) => {
  let _datasChapters = datas?.chapters as any;
  let _datasLessons = datas?.lessons as Array<ILesson>;
  let _lessons = [] as Array<ILesson>;
  const totalChapters = _datasChapters.length;
  for (let i = 0; i < totalChapters; i++) {
    _lessons = [];
    for (let j = 0; j < _datasLessons.length; j++) {
      if (_datasLessons[j].chapter === _datasChapters[i].id) {
        _lessons.push(_datasLessons[j]);
      }
      _datasChapters[i].lessons = _lessons;
    }
  }

  return _datasChapters;
};

/**
 * It takes an array of objects and returns an array of objects
 * @param {any} ar2 - the array of objects that you want to reorder
 * @returns An array of objects. Each object has a level_1, level_2, level_3, level_4, and level_5
 * property.
 */
export const reoderTitle = (ar2: any) => {
  let _result = [] as any;
  let _temp = [] as any;
  for (let i = 0; i < ar2.length; i++) {
    if (ar2[i].parent === null) {
      _temp.push(ar2[i]);
      _result.push({
        level_1: [],
        level_2: [],
        level_3: [],
        level_4: [],
        level_5: [],
      });
    }
  }

  for (let i = 0; i < ar2.length; i++) {
    if (ar2[i].parent !== null) {
      _temp.push(ar2[i]);
    }
  }

  let _ar = _temp;
  let _ref = 0;

  _ar.forEach((element: any, index: number) => {
    if (element.parent === null) {
      _ref = index;
      let _firstPart = element;

      _result[_ref]["level_1"] = _firstPart;
      // on a trouvé une partie qui est element

      _ar.forEach((element2: any, index: number) => {
        if (_firstPart.id === element2.parent) {
          let _seconPart = element2;
          _result[_ref]["level_2"][index] = element2;

          _ar.forEach((element3: any, index: number) => {
            if (_seconPart.id === element3.parent) {
              let _thirdPart = element3;
              _result[_ref]["level_3"][index] = element3;

              _ar.forEach((element4: any, index: number) => {
                if (_thirdPart.id === element4.parent) {
                  _result[_ref]["level_4"][index] = element4;
                }
              });
            }
          });
        }
      });
    }

    _result[_ref]["level_2"] = _result[_ref]["level_2"].filter(function (
      n: any
    ) {
      return n;
    });
    _result[_ref]["level_3"] = _result[_ref]["level_3"].filter(function (
      n: any
    ) {
      return n;
    });
    _result[_ref]["level_4"] = _result[_ref]["level_4"].filter(function (
      n: any
    ) {
      return n;
    });
  });
 
  return _result;
};

/**
 * It takes the data from the table of contents and reorders it into a nested array.
 * @param {IDatas} datas - the data that you want to get the completion of.
 * @returns An array of objects with the following properties:
 */
export const getCompletion = (datas: IDatas, isAdaptative: boolean = true) => {
  let _result = [] as any;
  const _parts = reoderTitle(tableOfContents(datas));

  _parts.forEach((item: any) => {
    let _isAllOpened = 0;
    let _total = 0;
    let _count = 0;

    if (isAdaptative) {
      /*  item?.level_1?.forEach((level: ILessons) => {
        if (level.lessons.length) {
          _count += 1;
          _total += getProgression(level);
        }
      }); */

      item?.level_2?.forEach((level: ILessons) => {
        if (level.lessons.length) {
          _count += 1;
          _total += getProgression(level);
        }
      });

      item?.level_3?.forEach((level: ILessons) => {
        if (level.lessons.length) {
          _count += 1;
          _total += getProgression(level);
        }
      });
      item?.level_4?.forEach((level: ILessons) => {
        if (level.lessons.length) {
          _count += 1;
          _total += getProgression(level);
        }
      });

      if (Math.round(_total / _count) === 100) {
        _isAllOpened = 100;
        _total = 100;
      }
    } else {
      if (item.level_1.lessons.length) {
        for (let p = 0; p < item.level_1.lessons.length; p++) {
          _total += 1;

          if (item.level_1.lessons[p].time > 0) {
            _isAllOpened += 1;
          }
        }
      }

      for (let i = 0; i < item.level_2.length; i++) {
        if (item.level_2[i].lessons.length) {
          for (let p = 0; p < item.level_2[i].lessons.length; p++) {
            _total += 1;

            if (item.level_2[i].lessons[p].time > 0) {
              _isAllOpened += 1;
            }
          }
        }
      }

      for (let i = 0; i < item.level_3.length; i++) {
        if (item.level_3[i].lessons.length) {
          for (let p = 0; p < item.level_3[i].lessons.length; p++) {
            _total += 1;

            if (item.level_3[i].lessons[p].time > 0) {
              _isAllOpened += 1;
            }
          }
        }
      }

      for (let i = 0; i < item.level_4.length; i++) {
        if (item.level_4[i].lessons.length) {
          for (let p = 0; p < item.level_4[i].lessons.length; p++) {
            _total += 1;

            if (item.level_4[i].lessons[p].time > 0) {
              _isAllOpened += 1;
            }
          }
        }
      }
    }
    //console.log("_total",_total,Math.round(_total / _count),_isAllOpened)
    _result.push({
      name: item.level_1.title,
      isOpen: _total === _isAllOpened && _isAllOpened !== 0,
    });
  });

  return _result;
};

/**
 * Given a string, it returns the corresponding SVG image
 * @param {string} pic - the name of the file
 * @param {string} level - string
 * @returns A string that is the path to the image.
 */
export const managerPic = (pic: string, level: string) => {
  if (pic.toLowerCase().includes("document")) {
    return "./assets/images/document.svg";
  } else {
    return "./assets/images/lesson.svg";
  }

 
};

/**
 * Given a list of lessons, return the progression percentage of the user
 * @param {ILessons} datas - the data object that contains the lessons
 * @returns The progression of the user in the training.
 */
export const getProgression = (datas: ILessons) => {
  let _total = 0;
  
  datas.lessons.forEach((item: any) => {
    if (item.time > 0) {
      _total += 1;
    }
  });
      
  
    
  const _collectionLgt = datas.lessons.length;

  return Math.round(Math.round((_total / _collectionLgt) * 100));
};

/**
 * If localStorage is available, set a test key and remove it, if it's not available, return false.
 * @returns true or false
 */
export const isLocalStorageAvailable=()=>{
  var test = 'test';
  try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
  } catch(e) {
      return false;
  }
}

