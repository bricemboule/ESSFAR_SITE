import React from "react";

const FraisIncription = () => {
    return (
        <>
            {/*<div className="relative z-[-1]">
                <table className="table-auto w-full text-center text-sm font-light">
                    <thead className="border-b bg-sky-500 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                        <tr>
                            <th scope="col" className=" px-6 py-2">
                                Frais
                            </th>
                            <th scope="col" className=" px-6 py-2">
                                Licence 1
                            </th>
                            <th scope="col" className=" px-6 py-2">
                                Licence 2
                            </th>
                            <th scope="col" className=" px-6 py-2">
                                Licence 3
                            </th>
                            <th scope="col" className=" px-6 py-2">
                                Master 1 & 2
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                Concours
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                20 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                20 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                20 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                20 000
                            </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                Inscription administration
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4 ">
                                230 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                230 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                230 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                230 000
                            </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                Scolarite
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                1 800 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                1 800 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                2 000 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                2 300 000
                            </td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500 font-bold">
                            <td className="whitespace-nowrap  px-6 py-4">
                                TOTAUX
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                2 030 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                2 030 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                2 230 000
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                2 530 000
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-auto w-full text-center text-sm font-light">
                    <thead className="border-b bg-sky-500 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                        <tr>
                            <th scope="col" className=" px-6 py-2">
                                1 <sup>ère</sup> tranche
                            </th>
                            <th scope="col" className=" px-6 py-2">
                                2<sup>e</sup> tranche
                            </th>
                            <th scope="col" className=" px-6 py-2">
                                3<sup>e</sup> tranche
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                40% en octobre
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                40% en janvier
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                                20% en mars
                            </td>
                        </tr>
                    </tbody>
                </table>
    </div>*/}

            <div className="relative overflow-x-auto">
                <div className="mx-2">
                    <h1 className="py-4 text-red-500 text-center text-3xl">
                        Frais
                    </h1>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-sm text-white bg-sky-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-4 py-3">
                                    Frais
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Licence 1
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Licence 2
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Licence 3
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Master 1 & 2
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Concours
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    20 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    20 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    20 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    20 000
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Inscription Administrative
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    230 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    230 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    230 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    230 000
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Scolarité
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    1 800 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    1 800 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    2 000 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    2 300 000
                                </td>
                            </tr>
                            <tr className="bg-white font-bold border-b dark:bg-gray-800">
                                <th
                                    scope="row"
                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Totaux
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    2 030 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    2 030 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    2 230 000
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    2 530 000
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="py-6 mx-2">
                    <h1 className="py-4 text-red-500 text-3xl text-center">
                        Modalités de règlement de la scolarité
                    </h1>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-sm text-white bg-sky-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-4 py-3">
                                    1<sup>ère</sup> tranche
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    2<sup>e</sup> tranche
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    3<sup>e</sup> tranche
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    40% en octobre
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    40% en janvier
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    20% en mars
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default FraisIncription;
