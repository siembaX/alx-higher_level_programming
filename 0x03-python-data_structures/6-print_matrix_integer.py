#!/usr/bin/python3
# 6-print_matrix_integer.py
# Ifeanyi kalu


def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        for i in row:
            if i is not row[len(row) - 1]:
                print("{:d}".format(i), end=" ")
            else:
                print("{:d}".format(i), end="")
        print()
