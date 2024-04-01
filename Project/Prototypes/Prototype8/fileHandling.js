import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';

export const createDirectoriesForOutputs =()=> {
    // Get the current file's directory
    const currentDirectory = dirname(fileURLToPath(import.meta.url));

    // Construct the new directory path
    const parentDirectory = join(currentDirectory, "GeneratedContent");

    // Check if the parent directory already exists
    if (!existsSync(parentDirectory)) {
        // Create the parent directory
        mkdirSync(parentDirectory);
        console.log(`Parent Directory created successfully.`);
    } else {
        console.log(`Parent Directory already exists.`);
    }

    // Get the list of directories inside the parent directory
    const directories = readdirSync(parentDirectory, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    // Generate a new directory named "RunX", where X is the number of existing directories plus 1
    const newRunDirectory = join(parentDirectory, `Run${directories.length + 1}`);

    // Create the new directory
    mkdirSync(newRunDirectory);
    console.log(`New directory "${newRunDirectory}" created successfully.`);

    // Get the updated list of directories inside the parent directory
    const updatedDirectories = readdirSync(parentDirectory, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    // Check if there are any directories inside the parent directory
    if (updatedDirectories.length > 0) {
        console.log(`The parent directory contains the following directories: ${updatedDirectories.join(', ')}`);
    } else {
        console.log(`The parent directory does not contain any directories.`);
    }
}

export const getMostRecentDirectory=()=> {
    try {
        // Get the current file's directory
        const currentDirectory = dirname(fileURLToPath(import.meta.url));

        // Construct the parent directory path
        const parentDirectory = join(currentDirectory, "GeneratedContent");

        // Get the list of directories inside the parent directory
        const directories = readdirSync(parentDirectory, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        // Sort the directories by the run number (assuming the format is "RunX")
        const sortedDirectories = directories.sort((a, b) => {
            const runNumberA = parseInt(a.replace('Run', ''));
            const runNumberB = parseInt(b.replace('Run', ''));

            return runNumberB - runNumberA;
        });

        // Return the relative path of the most recent directory
        return join(parentDirectory, sortedDirectories[0]);

    }
    catch (err) {
        console.log("Directory has not been created yet")
        return null;
    }
}

//console.log(getMostRecentDirectory());

//createDirectoriesForOutputs();

export const createSubDirectories=()=> {
    // Get the most recent directory
    const mostRecentDirectory = getMostRecentDirectory();

    // Check if the most recent directory exists
    if (mostRecentDirectory) {
        // Construct the new directory paths
        const generatedSchemasDirectory = join(mostRecentDirectory, "GeneratedSchemas");
        const generatedMockDataDirectory = join(mostRecentDirectory, "GeneratedMockData");

        // Create the new directories
        if (!existsSync(generatedSchemasDirectory)) {
            mkdirSync(generatedSchemasDirectory);
            console.log(`New directory "${generatedSchemasDirectory}" created successfully.`);
        } else {
            console.log(`Directory "${generatedSchemasDirectory}" already exists.`);
        }

        if (!existsSync(generatedMockDataDirectory)) {
            mkdirSync(generatedMockDataDirectory);
            console.log(`New directory "${generatedMockDataDirectory}" created successfully.`);
        } else {
            console.log(`Directory "${generatedMockDataDirectory}" already exists.`);
        }
    } else {
        console.log("The most recent directory does not exist.");
    }
}

//createDirectoriesForOutputs();
//createSubDirectories();
