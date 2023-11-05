
const Database = require('./skv.js');

(async () => {

    // Create a new database. Root directory required, maxDirs = 1e4
    // maxDirs is in place to keep files per directory manageable

    try {
        const db = new Database({
            root: './db',
            maxDirs: 20,
            // maxDirs: 1e4
        });

        // Ensure directory exists, create if not

        await db.open();
        // Save data

        var example = {
            id: "12345",
            username: 'test',
            posts: 54,
            tags: ['green', 'red', 'blue']
        };

        //console.log(await db.get(String(parseInt(example.id + 500))))

        //return
        await db.set(example.id, example);

        // Link another property to same file

        //await db.link(example.username, example.id);

        // Get data
        // exampleCopy should be identical to example

        const val = await db.get(example.id);

        //console.log(val)

        (async () => {

            var i = 0;

            while (i < 43) {
                ////console.log("got here");
                example.id = String(parseInt(example.id) + 1)
                console.time("Read")
                await db.set(String(parseInt(example.id)), example);
                console.timeEnd("Read")
                console.time("Write")
                console.log(await db.get(String(parseInt(example.id))))
                console.timeEnd("Write")


                // var lastVal = parseInt(await get("__last_val"));

                i++;
                // return;

                // await db.set("__last_val", `${Number(await get("__last_val")) + 1}`);

                // ////console.log(all());
                // if (!lastVal) lastVal = "0";

                // ////console.log(lastVal);
                // input_value = Number(lastVal) + 1; // Math.floor(Number(last().replace(/\D/g, ""))) + 1;
                // await set("__lastVal", `${input_value}`);
                // //console.log("Last Value is: ", input_value);
                // //return;
                // console.time("Measure Sled Time");
                // //var guidGen = guidGenerator();
                // try {
                //   await set(`${input_value + i}`, `${guidGenerator()}-${lastVal + 1}`);
                //   //setTimeout(() => {}, 1000);
                //   //console.log(await get(`${input_value + i}`));
                //   //lastVal = 0;
                // } catch (error) {
                //   //console.log("Error");
                //   //  await set(`${i}-${guidGenerator()}`, `${guidGenerator()}`);
                // }

                // console.timeEnd("Measure Sled Time");
                // i++;
            }
        })();

        // Delete data
        // example.username entry still exists however since it's a hard link

        //await db.del(example.id);

        // Iterate database
        // Bind objects to this method for more complex manipulations

        // await db.each(async function (data, key, bucket) {
        //     void //console.log({ data, key, bucket })


        // });

        // // Clear database (delete everything)

        // await db.clear();

        // // Update an entry
        // // Objects will be merged via Object.assign

        // await db.update(example.id, {
        //     posts: 65,
        //     tags: ['red']
        // });
    } catch (error) {
        //console.log(error)
    }

})();
