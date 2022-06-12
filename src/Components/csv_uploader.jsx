import React, { useState } from 'react'
import { Importer, ImporterField } from "react-csv-importer";
import Header from './Header'
import { Container, Row, Col } from 'react-bootstrap'
import CsvDownload from 'react-json-to-csv'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dummydata from "./dummydata.json";

function Csv_uploader() {
    const [data, setData] = useState([]);
    const [users, setUsers] = useState(Dummydata);
    const [show, setShow] = useState(false);





    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(data)
        )}`;
        console.log("data", data);
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";

        link.click();
        toast.success('🚀 file download successfully !', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


    };
    return (
        <div className='csvbg'>
            <Header />
            <Container>
                <Row className="csv_row">
                    <Col lg={8} >
                        <h2 style={{ margin: 20 }}>Upload any CSV file here</h2>


                        <Importer
                            chunkSize={10000} // optional, internal parsing chunk size in bytes
                            assumeNoHeaders={false} // optional, keeps "data has headers" checkbox off by default
                            restartable={false} // optional, lets user choose to upload another file when import is complete
                            onStart={({ file, fields }) => {
                                // optional, invoked when user has mapped columns and started import
                                // alert(`Importing ${file.name}`);
                                console.log("starting import of file", file, "with fields", fields);
                            }}
                            onComplete={({ data, fields }) => {
                                // optional, invoked when import is complete
                                // alert(`Import of ${fields.file} complete`);
                                toast.success('🦄 Completed , Now you can download the file!', {
                                    position: "bottom-left",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });
                                setShow(true)




                                console.log("import complete", data, "with fields", fields);
                                // setData(data);
                            }
                            }
                            //  onComplete: ({ file }) => {
                            //         showSnack(`Finished importing ${file.name}`);
                            processChunk={async (rows) => {
                                // required, receives a list of parsed objects based on defined fields and user column mapping;
                                // may be called several times if file is large
                                // (if this callback returns a promise, the widget will wait for it before parsing more data)
                                console.log("received batch of rows", rows);

                                // mock timeout to simulate processing
                                await new Promise((resolve) => {
                                    console.log("waiting for 1 second", rows)
                                    setData(rows)
                                    setUsers(rows)
                                    setTimeout(resolve, 4000)
                                });

                            }}
                            onError={({ error, file }) => {
                                // optional, invoked when import fails
                                alert(`Error importing ${file.name}: ${error.message}`);
                                console.log("error importing file", file, error);
                            }
                            }
                            onProgress={({ imported, total, file }) => {
                                // optional, invoked when import is in progress

                                console.log("import progress", imported, total, file);
                                //  Refresh



                            }
                            }



                            onClose={(file, fields) => {
                                // optional, invoked when import is done and user clicked "Finish"
                                // (if this is not specified, the widget lets the user upload another file)
                                console.log("importer dismissed", file, fields);

                            }}
                        >
                            <ImporterField name="option_a" label="Value A" />
                            <ImporterField name="option_b" label="Value B" />
                            <ImporterField name="option_c" label="Value C" optional />
                            <ImporterField name="option_d" label="Value D" optional />
                            <ImporterField name="option_e" label="Value E" optional />

                        </Importer>

                        <div className='btn-container'>
                            {show ?
                                <button onClick={exportData} className='button-33'>
                                    Download in json ✨                      </button   >
                                : null}

                            <ToastContainer
                                position="bottom-left"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />

                            <CsvDownload
                                data={users}
                                filename="good_data.csv"
                                className='button-33'

                            >
                                {show ? <span>Download csv file  ✨ </span> : <span>Download dummy csv  ✨</span>}
                            </CsvDownload>
                        </div>


                    </Col>
                </Row>
            </Container>

        </div>)
}

export default Csv_uploader