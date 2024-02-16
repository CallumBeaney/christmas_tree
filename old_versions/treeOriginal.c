/* caveman procedural version */

#include <stdio.h>
#include <unistd.h>
#include <time.h>
#include <stdlib.h>
#include <math.h>
#include <stdbool.h>

void snowflake(int rnd, const char* altCharacter);

int main(void)
{
    const char *clrScrn = "\x63\x6C\x65\x61\x72";
    system(clrScrn);
    srand(time(NULL));

    int treeHeight = rand() % 11 + 12;

    for (;;)
    {
        system(clrScrn);
        printf("\n");

        bool topRow = true;
        for (int rowNum = 0; rowNum <= treeHeight; rowNum++)
        {
            snowflake(treeHeight - rowNum, " ");
            snowflake(rowNum, "#");
            if (topRow) {  
                printf("##");
                topRow = false;
            }
            else { 
                printf("||");
            }
            snowflake(rowNum, "#");
            snowflake(treeHeight - rowNum, " ");
            printf("\n");
        }

        snowflake(treeHeight, " ");
        printf("||");
        snowflake(treeHeight, " ");
        printf("\n");

        for (int j = 0; j < treeHeight; j++) {
            printf("_");
        }
        printf("||");
        
        for (int k = 0; k < treeHeight; k++) {
            printf("_");
        }
        printf("");
        fflush(stdout);
        sleep(1);
    }
}


void snowflake(int rowLen, const char* altChar)
{   
    int flakeCtr = 0;
    bool flakeJustPrinted = true;

    for (int rowInd = 0; rowInd < rowLen; rowInd++) {
        int rnd = rand() % 11;
        if ((flakeCtr < 2 && !flakeJustPrinted && rnd % 7 == 0) ? 1 : 0) {
            printf("*");
            flakeJustPrinted = true;
            flakeCtr += 1;
        } else {
            printf(altChar);
            flakeJustPrinted = false;
        }
    }
}