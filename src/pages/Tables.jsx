import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, background } from '@chakra-ui/react'
import React from 'react'

function Tables() {
  return (
    <div className='uploads'>
      <div>Uploads</div>
      <div className='tableMain'>
      <table>
  <thead>
    <tr>
      <th>SI No.</th>
      <th>Links</th>
      <th>Prefix</th>
      <th>Add Tags</th>
      <th>Selected Tags</th>
    </tr>
  </thead>
  
</table>
 <div className='body1'>
    <div>01</div>
    <div>www.google.com</div>
    <div>prefixsample</div>
    <div><select>
        <option value="">Select Tags</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </select></div>
    <div><span>Tag1 X</span><span>Tag2 X</span><span>Tag3 X</span><span>Tag4 X</span></div>
 </div>
 <div className='body1'>
    <div>02</div>
    <div>www.google.com</div>
    <div>prefixsample</div>
    <div><select>
        <option value="">Select Tags</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </select></div>
    <div><span>Tag1 X</span><span>Tag2 X</span><span style={{ background: "white" }}>Tag3 X</span><span style={{ background: "white" }}>Tag4 X</span></div>
 </div>
 <div className='body1'>
    <div>03</div>
    <div>www.google.com</div>
    <div>prefixsample</div>
    <div><select>
        <option value="">Select Tags</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </select></div>
    <div><span>Tag1 X</span><span>Tag2 X</span><span>Tag3 X</span><span>Tag4 X</span></div>
 </div>
 <div className='body1'>
    <div>04</div>
    <div>www.google.com</div>
    <div>prefixsample</div>
    <div><select>
        <option value="">Select Tags</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </select></div>
    <div><span>Tag1 X</span><span style={{ background: "white" }}>Tag2 X</span><span style={{ background: "white" }}>Tag3 X</span><span style={{ background: "white" }}>Tag4 X</span></div>
 </div>
 <div className='body1'>
    <div>05</div>
    <div>www.google.com</div>
    <div>prefixsample</div>
    <div><select>
        <option value="">Select Tags</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </select></div>
    <div><span>Tag1 X</span><span>Tag2 X</span><span>Tag3 X</span><span style={{ background: "white" }}>Tag4 X</span></div>
 </div>
      </div>
    </div>
  )
}

export default Tables
